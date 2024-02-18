import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";
import { YT_SEARCH_SUGGESTION } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

function Header() {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    // implement a debouce to invoke this only when the difference between current API call and
    // previousOne is more than 200 milliseconds.

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchQuerySuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQuerySuggestions = async () => {
    const json = await fetch(YT_SEARCH_SUGGESTION + searchQuery);
    const data = await json.json();
    console.log(data);
    setSearchSuggestions([...data[1]]);
    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };

  const handleMenuToggle = () => {
    dispatch(toggleSideBar());
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
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
      <div className="grow max-w-[50%]">
        <div className="flex">
          <input
            className="px-5 grow py-1 border border-zinc-600 rounded-l-3xl"
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
            placeholder="Search"
            onBlur={() => {
              setShowSuggestions(false);
            }}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="py-0 pl-3 pr-5 border border-zinc-600 rounded-r-3xl border-l-0  bg-zinc-100">
            <img
              className="w-9"
              src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"
            />
          </button>
        </div>
        <div className="fixed bg-white mx-2 w-[46%] rounded-b-lg">
          <ul>
            {showSuggestions &&
              searchSuggestions.map((s, i) => (
                <li
                  className="px-3 py-1 hover:bg-gray-100"
                  onClick={() => setSearchQuery(searchSuggestions[i])}
                >
                  {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <img
        className="w-14 grow-0 mx-4 cursor-pointer"
        src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
      />
    </div>
  );
}

export default Header;
