import React from 'react';

const VideoCard = ({ title, videoUrl }) => {
  return (
    <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-4 hover:glow p-4">
      <div className="w-full">
        <video
          className="object-cover w-full h-full rounded-lg"
          src={videoUrl}
          alt={title}
          style={{ aspectRatio: '16 / 9' }}
          autoPlay
          muted
          loop
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
        />
        <div className="mt-2">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
