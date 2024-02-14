import React, { useEffect, useState } from 'react'
import { YT_POPULAR_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard';

function VideoContainer() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    const response = await fetch(YT_POPULAR_VIDEOS_API);
    const jsonData = await response.json();
    setVideos(jsonData.items);
  }
  return (
    <div className='flex flex-wrap pl-1'>

      {videos.map(video => <VideoCard key={video.id}info={video}/>)}

    </div>
  )
}

export default VideoContainer