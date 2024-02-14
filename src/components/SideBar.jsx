import homeIcon from "../assets/home.png";
import shortsIcon from "../assets/stopwatch.png";
import subscriptionIcon from "../assets/subscribe.png";
import musicIcon from "../assets/play-button.png";
import rightChevIcon from "../assets/right-chevron.png";
import { useSelector } from "react-redux";

const SideBar = () => {

    const appReducer = useSelector(state => state.app)
  const mainOptions = [
    {
      text: "Home",
      icon: homeIcon,
    },
    { text: "Shorts", icon: shortsIcon },
    {
      text: "Subscripts",
      icon: subscriptionIcon,
    },
    {
      text: "Youtube Music",
      icon: musicIcon,
    },
  ];

  const yourOption = [
    {
      text: "Your Channel",
      icon: homeIcon,
    },
    { text: "History", icon: shortsIcon },
    {
      text: "Your videos",
      icon: subscriptionIcon,
    },
    {
      text: "Watch later",
      icon: musicIcon,
    },
    {
      text: "Downloads",
      icon: musicIcon,
    },
  ];

  const subOption = [
    {
      text: "Music",
      icon: homeIcon,
    },
    { text: "Movie", icon: shortsIcon },
    {
      text: "Science",
      icon: subscriptionIcon,
    },
    {
      text: "Tech",
      icon: musicIcon,
    },
    {
      text: "Sports",
      icon: musicIcon,
    },
  ];

  return (
    <div className={appReducer.isSideBarOpen ? "flex flex-col w-[12.5%] p-2" : "flex flex-col p-2"}>
      <div className="border-b border-gray-300">
        <span></span>
        <ul className="py-2">
          {mainOptions.map((option) => (
            <li className="p-2 m-1 hover:bg-zinc-300 hover:rounded-lg flex justify-between items-center">
              <img className="w-6 grow-0 mr-2" src={option.icon} />
              {appReducer.isSideBarOpen && <span className="grow ml-4">{option.text}</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b border-gray-300 mt-2">
        {appReducer.isSideBarOpen && <div className="flex items-center m-0">
          <span className="font-bold text-lg p-1">You</span>
          <img src={rightChevIcon} className="w-4 h-4" />
        </div>}

        <ul className="pb-2">
          {yourOption.map((option) => (
            <li className="p-2 m-1 hover:bg-zinc-300 hover:rounded-lg flex justify-between items-center">
              <img className="w-6 grow-0 mr-2" src={option.icon} />
              {appReducer.isSideBarOpen && <span className="grow ml-4">{option.text}</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b border-gray-300 mt-2">
      {appReducer.isSideBarOpen && <div className="flex items-center m-0">
          <span className="font-bold text-lg p-1">Subscriptions</span>
          <img src={rightChevIcon} className="w-4 h-4" />
        </div>}
        <ul>
          {subOption.map((option) => (
            <li className="p-2 m-1 hover:bg-zinc-300 hover:rounded-lg flex justify-between items-center">
              <img className="w-6 grow-0 mr-2" src={option.icon} />
              {appReducer.isSideBarOpen && <span className="grow ml-4">{option.text}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
