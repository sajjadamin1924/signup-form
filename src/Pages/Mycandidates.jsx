import React from "react";
import Header from "../Components/Header";
import { FaRegFileAlt } from "react-icons/fa";

const Mycandidates = () => {
  return (
    <>
      <Header />
      <div className="px-6 flex items-center justify-between bg-[#F6F7F7] p-4">
        <div> <h1>My candidates</h1></div>
        <div>
          <button className="flex items-center p-2 px-4 bg-[#C0FF06] pr-4 text-md border-1 border-gray-100 rounded-md hover:bg-[#252E3A] hover:text-white">
            <FaRegFileAlt className="mr-2" />
            Create new test
          </button>
        </div>
      </div>
    </>
  );
};

export default Mycandidates;
