import React from "react";
import { FaRegClock } from "react-icons/fa6";

const Card = ({ title, time, button1, button2 }) => {
  return (
    <div>
      <div className="card bg-[#F6F7F7] px-4 p-4 border-1 border-gray-300 rounded-xl">
        <div className="flex justify-between">
          <div>
            <h1 className="text-sm font-bold">{title}</h1>
          </div>
          <div className="items-center ">
            <button className=" flex px-4 text-lg border-1 border-green-600 rounded-2xl cursor-pointer">
              {button1}
            </button>
          </div>
        </div>
        <div>
          <h1 className="mt-8 flex items-center text-gray-400">
            <FaRegClock className="mr-2" />
            {time}
          </h1>
        </div>
        <div>
          <button
            className="bg-[#252E3A] text-white items-center w-full p-2 text-md rounded-xl mb-2 mt-20 hover:bg-[#C0FF06] hover:text-gray-500
           cursor-pointer"
          >
            {button2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
