const TrendingNews = ({ title, url, urlToImage }) => {
  return (
    <div className="flex items-center mb-4 p-4 border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      <img className="w-16 h-16 object-cover rounded-lg" src={urlToImage} alt={title} />
      <div className="ml-3">
        <a href={url} className="text-sm font-semibold text-blue-400 hover:text-blue-800">{title}</a>
      </div>
    </div>
  );
};

export default TrendingNews;
