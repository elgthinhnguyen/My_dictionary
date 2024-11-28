import React from "react";
import { MdDarkMode,MdLightMode } from "react-icons/md";
const ToogleBtn = ({ toggle, setToggle }) => {
  return (
    <>
      <div>
        <div
          onClick={() => setToggle(!toggle)}
          className=" relative inline-flex items-center cursor-pointer"
        >
          
         
          
          <div
            className={`w-11 h-6    ${
              toggle ? "bg-pink-500" : "bg-gray-300"
            } rounded-full `}
          ></div>
          <span
            className={`w-4 rounded-full h-4 m-[5px] absolute bg-[#fff] ${
              toggle ? "right-0" : "left-0"
            }`}
          ></span>
          
          
        </div>
       
        
      </div>
    </>
  );
};


export default ToogleBtn;
