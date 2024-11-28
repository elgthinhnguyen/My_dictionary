import React, { useState } from "react";
import { BiBookAlt } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import ToogleBtn from "./ToogleBtn";

const Header = ({ toggle, setToggle }) => {
  return (
    <div>
      <div className="max-w-3xl mx-auto bg-blue  flex justify-between p-4 ">
        <div className="text-3xl">
          <BiBookAlt className="dark:text-[#fff]" />
        </div>
        <div className="text-3xl flex">
          <div className="mr-[2px]">
            <ToogleBtn toggle={toggle} setToggle={setToggle} />
          </div>
          <MdDarkMode className=" text-pink-500 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
