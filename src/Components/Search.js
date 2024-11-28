import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ word, setWord, searchHandler }) => {
  const onKeyPress = (e) => {
    if (e.keyCode == 13) {
      searchHandler();
    } else {
      return;
    }
  };
  return (
    <div className="max-w-3xl mx-auto my-2 ">
      <div className="flex relative">
        <input
          placeholder="Nhap vao chu cai ban muon tim..."
          value={word}
          onKeyDown={(e) => onKeyPress(e)}
          onChange={(e) => setWord(e.target.value)}
          className="border bg-gray-100 text-black  focus:outline-none  rounded-lg p-4 h-10 w-[100%]"
        />
        <BiSearchAlt2
          onClick={searchHandler}
          className="absolute  right-2 cursor-pointer text-2xl text-pink-500 top-[20%]"
        />
      </div>
    </div>
  );
};

export default Search;
