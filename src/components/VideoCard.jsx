import React from "react";

function VideoCard({ info }) {
  return (
    <div className="flex flex-col w-[23rem] h-[18rem]  my-8 mx-5">
      <img
        className="rounded-2xl h-[14rem] bg-cover"
        src={info.snippet.thumbnails.standard.url}
      />
      <div className="flex">
        <img
                className="rounded-full w-14 h-8 grow-0 mt-3 mr-2"
                src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
            />
        <div className="grow p-1 flex flex-col justify-evenly">
         <div className="h-14 line-clamp-2 text-ellipsis py-2"><span className="font-bold">{info?.snippet?.title}</span></div>
          <span className="text-gray-500">{info.snippet.channelTitle}</span>
          <span className="text-gray-500">
            {info.statistics.viewCount / 1000 +
              "K views" +
              " . " +
              Math.floor(
                (new Date() - new Date(info.snippet.publishedAt)) /
                  (1000 * 60 * 60 * 24)
              ) +
              " days ago"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
