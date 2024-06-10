const NewsCard = ({ title, description, url, urlToImage }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-700/50">
      <div className="overflow-hidden rounded-tl-lg rounded-br-lg">
        <img className="w-full h-44 object-cover" src={urlToImage} alt={title} style={{ aspectRatio: '3 / 2' }} />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-xs mb-4">{description}</p>
        <a href={url} className="text-blue-500 hover:text-blue-700 text-sm">Read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
