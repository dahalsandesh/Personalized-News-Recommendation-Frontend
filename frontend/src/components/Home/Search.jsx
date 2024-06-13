import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import RecommendedNewsCard from '../NewsCard/RecommendedNewsCard';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const baseImageUrl = 'http://127.0.0.1:8000';


  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/main/search-post?search=${query}`);
        setSearchResults(response.data.articles || response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className="container mx-auto px-12 py-8">
      <h2 className="text-2xl font-bold mb-6">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 gap-4">
        {searchResults.map((news) => (
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

export default Search;
