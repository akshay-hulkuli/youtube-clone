import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";

function Header() {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex grow=0 items-center">
        <img
          className="w-6 h-6 mx-3"
          onClick={handleMenuToggle}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="w-28 mx-1"
          src="https://t4.ftcdn.net/jpg/04/48/05/91/360_F_448059190_Y2reHnfTndMhocoaAX4UlK3AhnY5Iuyt.jpg"
        />
      </div>
      <div className="flex grow max-w-[50%]">
        <input
          className="px-5 grow py-1 border border-zinc-600 rounded-l-3xl"
          type="text"
          placeholder="Search"
        />
        <button className="py-0 pl-3 pr-5 border border-zinc-600 rounded-r-3xl border-l-0  bg-zinc-100">
          <img
            className="w-9"
            src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"
          />
        </button>
      </div>
      <img
        className="w-14 grow-0 mx-4 cursor-pointer"
        src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
      />
    </div>
  );
}

export default Header;
