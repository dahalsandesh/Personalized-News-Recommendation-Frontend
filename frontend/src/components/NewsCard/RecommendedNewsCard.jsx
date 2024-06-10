const RecommendedNewsCard = ({ title, description, url, urlToImage }) => {
  return (
    <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-4 hover:glow p-4">
      <div className="w-1/3">
        <img className="object-cover w-full h-full rounded-lg" src={urlToImage} alt={title} style={{ aspectRatio: '16 / 9' }} />
      </div>
      <div className="pl-4 flex flex-col justify-between w-2/3">
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
        <a href={url} className="text-blue-500 hover:text-blue-700">Read more</a>
      </div>
    </div>
  );
};

export default RecommendedNewsCard;
