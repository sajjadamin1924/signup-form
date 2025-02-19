import "./App.css";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 flex items-center justify-center bg-[#e9f8e5]">
          <img
            src="left.jpg"
            alt="Student"
            className="max-h-[90%] rounded-lg"
            style={{ background: "#e9f8e5" }}
          />
        </div>

        <div className="w-1/2 flex items-center justify-center flex-col p-4 bg-white p-6">
          <form className="w-3/4 space-y-4 mt-4">
            <p className="text-2xl font-bold mt-6 mb-6 text-center">
              Create Account
            </p>

            <label className="block text-gray-600 mb-1">Full Name</label>
            <div className="relative flex items-center w-full">
              <img
                src="name.png"
                alt="Student"
                className="absolute left-4 w-6 h-6"
              />
              <input
                type="text"
                className="w-full p-3 pl-12 border border-gray-600 rounded-3xl"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <label className="block text-gray-600 mb-1">Email</label>
            <div className="relative flex items-center w-full">
              <img
                src="download1.png"
                alt="Student"
                className="absolute left-4 w-6 h-6"
              />
              <input
                type="email"
                className="w-full p-3 pl-12 border border-gray-600 rounded-3xl"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <label className="block text-gray-600 mb-1">Password</label>
            <div className="relative flex items-center w-full">
              <img
                src="password.png"
                alt="Student"
                className="absolute left-4 w-6 h-6"
              />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 pl-12 border border-gray-600 rounded-3xl"
                placeholder="Enter Your Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className=" w-full flex items-center justify-center bg-[#73885d] text-white font-bold py-2 px-4 rounded-3xl	mt-18 cursor-pointer"
            >
              sign-Up
            </button>
            <center>
              <p className="items-center justify-center">-OR-</p>
            </center>
            <div className="row flex items-center justify-center">
              <div className="flex items-center justify-center  px-4">
                <button className="cursor-pointer rounded-full p-1  bg-gray-200 hover:bg-gray-500">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                    <img src="download.png" alt="" className="w-6 h-6" />
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-center  px-4">
                <button className="cursor-pointer rounded-full p-1 bg-gray-200 hover:bg-gray-500">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                    <img src="facebook.png" alt="" className="w-6 h-6" />
                  </div>
                </button>
              </div>
              <div className="flex items-center justify-center  px-4">
                <button className="cursor-pointer rounded-full p-1 bg-gray-200 hover:bg-gray-500">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                    <img src="apple.png" alt="" className="w-6 h-6" />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
