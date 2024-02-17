import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openSideBar } from "../utils/appSlice";
import { YT_POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    dispatch(openSideBar());
  }, []);

  const fetchData = async () => {
    const response = await fetch(YT_POPULAR_VIDEOS_API);
    const jsonData = await response.json();
    setVideos(jsonData.items);
  };
  return (
    <div className="flex flex-wrap mt-5 pl-1 max-h-[88vh] overflow-y-auto">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
