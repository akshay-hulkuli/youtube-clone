import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../utils/appSlice";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  return (
    <div className="px-5 w-[100%] h-[89vh]">
      <iframe
        className="w-[75%] h-[83%] rounded-2xl"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
