import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateMessage } from "../utils/helper";
import { addMessage } from "../utils/liveCharSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          userName: generateMessage(5) + "User",
          message: generateMessage(20),
        })
      );
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleMessage = () => {
    dispatch(
      addMessage({
        userName: "akshay",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="mx-3 border border-black w-full h-[83%] rounded-xl overflow-y-auto relative flex flex-col-reverse">
      <div className="flex sticky bottom-0 bg-white mt-2 p-2">
        <input
          className="border border-gray-800 rounded-lg p-2 grow"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="text something"
        />
        <button
          className="border border-green-800 rounded-lg p-2 ml-2 w-20"
          onClick={handleMessage}
        >
          send
        </button>
      </div>
      <div className=" flex flex-col-reverse p-2">
        {messages.map((mes, i) => (
          <ChatMessage key={i} userName={mes.userName} message={mes.message} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
