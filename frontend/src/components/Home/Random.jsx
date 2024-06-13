import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecommendedNewsCard from '../NewsCard/RecommendedNewsCard';

const RandomNews = ({ searchQuery }) => {
  const [randomNews, setRandomNews] = useState([]);
  const baseImageUrl = 'http://127.0.0.1:8000';


  const fetchRandomNews = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/main/get-random-post');
      setRandomNews(response.data);
    } catch (error) {
      console.error('Error fetching random news:', error);
    }
  };

  useEffect(() => {
    fetchRandomNews();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetchRandomNews(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">News For You</h2>
      <div className="grid grid-cols-1 gap-8">
        {randomNews.map((news) => (
          <RecommendedNewsCard
            id={news.id}
            title={news.title}
            description={news.description}
            urlToImage={`${baseImageUrl}${news.post_img}` || 'https://via.placeholder.com/150'}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomNews;
