import React from 'react';
import { useNavigate } from 'react-router-dom';


const RecommendedNews = ({ title, description, url, urlToImage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/video', { state: { title, videoUrl: url } });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 cursor-pointer" onClick={handleClick}>
      <img src={urlToImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default RecommendedNews;
