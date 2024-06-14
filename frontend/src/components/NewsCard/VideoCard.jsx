import React, { useRef } from 'react';

const VideoCard = ({ title, videoUrl, description }) => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };


  return (
    <div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-14 hover:glow p-4 bg-white">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <video
        ref={videoRef}
        className="object-cover  rounded-lg mb-4"
        src={videoUrl}
        style={{ aspectRatio: '1.85 / 1' }}
        autoPlay={false}
        loop
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => e.currentTarget.pause()}
        controls
      />
      <div className="flex justify-between items-center mb-4">
      
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default VideoCard;
