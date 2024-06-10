const TrendingNews = ({ title, url, urlToImage }) => {
  return (
    <div className="flex items-center mb-2 p-2">
      <img className="w-16 h-16 object-cover rounded-full" src={urlToImage} alt={title} />
      <div className="ml-3">
        <a href={url} className="text-sm font-semibold text-blue-400 hover:text-blue-800 hover:text-bold">{title}</a>
      </div>
    </div>
  );
};

export default TrendingNews;
