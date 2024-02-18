const ChatMessage = ({ userName, message }) => {
  return (
    <div className="flex bg-gray-100 rounded-md p-2 my-1 shadow-lg items-center">
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
        className="w-10 h-8"
      />
      <span className="px-1 font-bold">{userName}</span>
      <span className="px-1 text-zinc-700 line-clamp-3 text-ellipsis">{message}</span>
    </div>
  );
};

export default ChatMessage;
