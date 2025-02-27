import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";

import { FaMicrosoft, FaRegCircleCheck, FaRegUser } from "react-icons/fa6";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <container>
      {" "}
      <header className="flex px-4 justify-between items-center p-2">
        <div className="flex px-4">
          <img src="dashboard.jpg" alt="logo" />
          <h1 className="text-5xl font-extrabold relative">Dexta</h1>
          <p className="absolute top-9 left-24 pt-4">data-led-hiring</p>
        </div>
        <div className="flex">
          <nav>
            <ul className="flex justify-between w-full space-x-4">
              <li className=" flex p-2 text-xl font-semibold rounded-xl  hover:bg-[#252E3A] hover:text-[#C0FF06] items-center">
                <FaMicrosoft className="mr-2" />
                My Tests
              </li>
              <li className=" flex p-2 text-xl font-semibold rounded-xl  hover:bg-[#252E3A]  hover:text-[#C0FF06] items-center">
                <FaRegUser className="mr-2" />
                My Candidates
              </li>
              <li className=" flex p-2 text-xl font-semibold rounded-xl  hover:bg-[#252E3A]  hover:text-[#C0FF06] items-center">
                <FaRegCircleCheck className="mr-2" />
                Modules
              </li>
            </ul>
          </nav>
        </div>

        <div className=" flex justify-center items-center px-4 ">
          <FontAwesomeIcon
            className="rounded-full border-2 border-gray-500 p-2 w-4 h-4 mr-6"
            icon={faQuestion}
          />
          <div className="rounded-full border-2 border-gray-500 p-2 w-12 h-12 flex items-center justify-center ml-2">
            <p className="text-center px-4">sa</p>
          </div>
          <h4 className="px-2">Hello Nabeel</h4>
          <FontAwesomeIcon className="ml-1" icon={faAngleDown} />
        </div>
      </header>
    </container>
  );
};

export default Header;
