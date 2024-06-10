import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { throttle } from 'lodash';
import RecommendedNewsCard from '../NewsCard/RecommendedNewsCard';
import TrendingNewsCard from '../NewsCard/TrendingNewsCard';
import Alert from '../Alert/Alert';

const HomePage = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [recommendedNews, setRecommendedNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(21);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showAlert, setShowAlert] = useState(!isLoggedIn);
  const [mediumScreen, setMediumScreen] = useState(window.innerWidth >= 768);

  const API_KEY = '034c373ed2984aecb086fbf614f3fffe';

  const cacheNews = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getCachedNews = (key) => {
    const cachedData = localStorage.getItem(key);
    return cachedData ? JSON.parse(cachedData) : null;
  };

  const fetchNews = async (query = '', page = 1) => {
    const cacheKey = query ? `newsData_${query}_${page}` : `newsData_${page}`;
    const cachedData = getCachedNews(cacheKey);
    if (cachedData) {
      setLatestNews(cachedData);
      setRecommendedNews(cachedData);
      return;
    }

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query || 'latest'}&apiKey=${API_KEY}&pageSize=${newsPerPage}&page=${page}`
      );
      const newsData = response.data.articles;
      setLatestNews(newsData);
      setRecommendedNews(newsData);
      cacheNews(cacheKey, newsData);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error('Rate limit exceeded, using cached data');
        if (!cachedData) {
          console.error('No cached data available');
        }
      } else {
        console.error('Error fetching news:', error);
      }
    }
  };

  const throttledFetchNews = useCallback(throttle(fetchNews, 60000), []);

  useEffect(() => {
    throttledFetchNews();
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [throttledFetchNews]);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setNewsPerPage(20);
      setMediumScreen(false);
    } else if (width >= 1024) {
      setNewsPerPage(15);
      setMediumScreen(true);
    } else {
      setNewsPerPage(10);
      setMediumScreen(true);
    }
  };

  const handleSearch = async () => {
    setCurrentPage(1);
    await fetchNews(searchQuery, 1);
  };

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentRecommendedNews = recommendedNews.slice(indexOfFirstNews, indexOfLastNews);
  const currentLatestNews = latestNews.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchNews(searchQuery, pageNumber);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="container mx-auto px-5 py-8">
      {showAlert && (
        <div className="alert-container">
          <Alert message="Login to get the personalized news experience" type="info" onClose={handleCloseAlert} />
        </div>
      )}
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        {isLoggedIn ? (
          <>
            <div className="w-full lg:w-4/5 lg:pr-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <h2 className="text-2xl font-bold mb-4 lg:mb-0">Recommended News</h2>
                {mediumScreen && (
                  <div className="flex items-center mb-4 lg:mb-0">
                    <input
                      type="text"
                      placeholder="Search news..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border border-gray-300 p-2 rounded-lg"
                    />
                    <button
                      onClick={handleSearch}
                      className="bg-blue-500 text-white p-2 rounded-lg ml-2 hover:bg-blue-700"
                    >
                      Search
                    </button>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {currentRecommendedNews.map((news) => (
                  <RecommendedNewsCard
                    key={news.url}
                    title={news.title}
                    description={news.description}
                    url={news.url}
                    urlToImage={news.urlToImage || 'https://via.placeholder.com/150'}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-6">
                {currentPage > 1 && (
                  <button onClick={() => paginate(currentPage - 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
                    Previous
                  </button>
                )}
                {indexOfLastNews < recommendedNews.length && (
                  <button onClick={() => paginate(currentPage + 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                    Next
                  </button>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/5 lg:pl-6 mt-8 lg:mt-0">
              <div className="flex flex-col">
                <div className="mb-4">
                  {!mediumScreen && (
                    <div className="flex items-center mb-4">
                      <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg w-full lg:w-auto"
                      />
                      <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white p-2 rounded-lg mt-2 lg:mt-0 lg:ml-2 hover:bg-blue-700 w-full lg:w-auto"
                      >
                        Search
                      </button>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold mb-4">Trending</h2>
                <div className="grid grid-cols-1 gap-6">
                  {currentLatestNews.map((news) => (
                    <TrendingNewsCard 
                    key={news.url}
                    title={news.title}
                    url={news.url}
                    urlToImage={news.urlToImage || 'https://via.placeholder.com/150'}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded-lg ml-2 hover:bg-blue-700"
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {currentLatestNews.map((news) => (
              <RecommendedNewsCard
                key={news.url}
                title={news.title}
                description={news.description}
                url={news.url}
                urlToImage={news.urlToImage || 'https://via.placeholder.com/150'}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {currentPage > 1 && (
              <button onClick={() => paginate(currentPage - 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
                Previous
              </button>
            )}
            {indexOfLastNews < latestNews.length && (
              <button onClick={() => paginate(currentPage + 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);
};

export default HomePage;

