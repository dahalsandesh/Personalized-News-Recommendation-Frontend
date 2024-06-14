import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../NewsCard/VideoCard';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/vapps/');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container mx-auto px-12 py-8">
      <h2 className="text-2xl font-bold mb-6">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard 
            id={video.id} 
            title={video.title} 
            videoUrl={video.url} 
            onClick={() => handleVideoClick(video)} 
          />
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg max-w-2xl w-full">
            <h3 className="text-xl font-bold mb-4">{selectedVideo.title}</h3>
            <div className="video-responsive">
              <iframe
                width="100%"
                height="315"
                src={selectedVideo.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded video"
              ></iframe>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
