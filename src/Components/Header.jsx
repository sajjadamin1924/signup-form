import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { FaMicrosoft, FaRegCircleCheck, FaRegUser } from "react-icons/fa6";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };
  

  return (
    <header>
      <nav className="flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src="logo.png" className="w-48 h-12 text-2xl" alt="logo" />
        </div>

        <div className="flex">
          <nav>
            <ul className="flex justify-between w-full space-x-4 items-center">
              <li className="flex items-center p-2 font-semibold rounded-xl">
                <NavLink
                  to="/my-tests"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-xl ${isActive ? "bg-[#252E3A] text-[#C0FF06]" : ""}`
                  }
                >
                  <FaMicrosoft className="mr-2" />
                  My Tests
                </NavLink>
              </li>
              <li className="flex items-center p-2 font-semibold rounded-xl">
                <NavLink
                  to="/my-candidates"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-xl ${isActive ? "bg-[#252E3A] text-[#C0FF06]" : ""}`
                  }
                >
                  <FaRegUser className="mr-2" />
                  My Candidates
                </NavLink>
              </li>
              <li className="flex items-center p-2 font-semibold rounded-xl">
                <NavLink
                  to="/modules"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-xl ${isActive ? "bg-[#252E3A] text-[#C0FF06]" : ""}`
                  }
                >
                  <FaRegCircleCheck className="mr-2" />
                  Modules
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center items-center px-4">
          <FontAwesomeIcon
            className="rounded-full border-2 border-gray-500 p-2 w-4 h-4 mr-6"
            icon={faQuestion}
          />
          <div className="rounded-full border-2 border-gray-500 p-2 w-10 h-10 flex items-center justify-center ml-2">
            <p className="text-center px-4">sa</p>
          </div>
          <div className="flex items-center">
            <h4 className="px-2">Hello Nabeel</h4>
            
            
            <div className="relative">
              <FontAwesomeIcon
                className="ml-1 cursor-pointer"
                icon={faAngleDown}
                onClick={handleDropdownToggle} 
              />
              
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <ul className="text-sm">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer"></li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">settings</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
