import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaMicrosoft, FaRegCircleCheck, FaRegUser } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIyLCJ0eXBlIjoicmVjcnVpdGVyIiwiaWF0IjoxNzQwNzQzNTk5LCJleHAiOjE3NDA4MDM1OTksImF1ZCI6Imh0dHBzOi8vZGV2LmRleHRhLmlvIiwiaXNzIjoiMjdjYWY1MmMtZjFhMy00YTlkLTg5NDItYmIxMzM2MDM5OWY0Iiwic3ViIjoiYmthcmFtYXQrZGV2ZW50ZXJhZnRlckBjb2RlLWZyZWFrcy5jb20ifQ.m6eZyjs0tEAMgZ1SoR2AUJX6OGRgChfj9CTLmfyQwfyyi-hm_DW2QXhtsaaHxrCuXz-QyNGU6ia2oSPg_rriEkRj5snJ_2d53yIvNePHaKpJCVUX9_fiVwiQdXX9rNRhcf1XK9rWfI-KR-GtigkPUdyymB8HWoBwILx9vKjrKaWJCd5mYVAGM7BqkX4iHEGeGCUBytLVi4N3SdLma5x9qR1xPZ2UUObsdkUQWH7df1Pl8BaQs1DjTGDVV2_Ian5kTvyDM63s6AeOvPGtgqW7-kwi1CmynygtwMQcxU0gZv1QPOjthXZE-kKoNhOwqdcamb3MVC6tH01OwG0FGvuuGw");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIyLCJ0eXBlIjoicmVjcnVpdGVyIiwiaWF0IjoxNzQwNzQzNTk5LCJleHAiOjE3NDA4MDM1OTksImF1ZCI6Imh0dHBzOi8vZGV2LmRleHRhLmlvIiwiaXNzIjoiMjdjYWY1MmMtZjFhMy00YTlkLTg5NDItYmIxMzM2MDM5OWY0Iiwic3ViIjoiYmthcmFtYXQrZGV2ZW50ZXJhZnRlckBjb2RlLWZyZWFrcy5jb20ifQ.m6eZyjs0tEAMgZ1SoR2AUJX6OGRgChfj9CTLmfyQwfyyi-hm_DW2QXhtsaaHxrCuXz-QyNGU6ia2oSPg_rriEkRj5snJ_2d53yIvNePHaKpJCVUX9_fiVwiQdXX9rNRhcf1XK9rWfI-KR-GtigkPUdyymB8HWoBwILx9vKjrKaWJCd5mYVAGM7BqkX4iHEGeGCUBytLVi4N3SdLma5x9qR1xPZ2UUObsdkUQWH7df1Pl8BaQs1DjTGDVV2_Ian5kTvyDM63s6AeOvPGtgqW7-kwi1CmynygtwMQcxU0gZv1QPOjthXZE-kKoNhOwqdcamb3MVC6tH01OwG0FGvuuGw");
    setUser({ name: "", email: "" });
    navigate("/");
  };

  return (
    <header>
      <nav className="flex justify-between items-center px-6 p-2">
        <div className="flex items-center">
          <img src="logo.png" className="w-48 h-12 text-2xl" alt="logo" />
        </div>

        <div className="flex">
          <nav>
            <ul className="flex justify-between w-full space-x-4 items-center">
              <li className="flex items-center px-4 font-bold rounded-xl">
                <NavLink
                  to="/my-tests"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md ${isActive ? "bg-[#252E3A] text-[#C0FF06]" : ""}`
                  }
                >
                  <FaMicrosoft className="mr-2" />
                  My Tests
                </NavLink>
              </li>
              <li className="flex items-center p-2 font-bold rounded-xl">
                <NavLink
                  to="/my-candidates"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md ${isActive ? "bg-[#252E3A] text-[#C0FF06]" : ""}`
                  }
                >
                  <FaRegUser className="mr-2" />
                  My Candidates
                </NavLink>
              </li>
              <li className="flex items-center p-2 font-bold rounded-xl">
                <NavLink
                  to="/modules"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md ${isActive ? "bg-[#252E3A] text-[#C0FF06]" : ""}`
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
          <FontAwesomeIcon className="rounded-full border-2 border-gray-500 p-2 w-4 h-4 mr-6" icon={faQuestion} />
          <div className="rounded-full border-2 border-gray-500 w-10 h-10 flex items-center justify-center ml-2 overflow-hidden">
            <img src="5.png" alt="User Profile" className="w-full h-full object-cover" />
          </div>

          <div className="flex items-center">
            <h4 className="px-2">Hello {user.name || "User"}</h4>

            <div className="relative">
              <FontAwesomeIcon
                className="ml-1 cursor-pointer"
                icon={faAngleDown}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />

              {isDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-56 bg-white border rounded-lg shadow-lg">
                  <ul className="text-sm">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">{user.email || "No Email"}</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600 font-semibold" onClick={handleLogout}>
                      Logout
                    </li>
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
