import React from "react";
import Header from "../Components/Header";

const Createnewtest = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-100 px-4 rounded-lg shadow-lg mt-4 ">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8 items-center">
            <h2 className="text-xl font-semibold mb-4 items-center">Create New Test</h2>
            <p>Added modules (0)</p>
            <p>0 mins</p>
          </div>
          <div className="mt-6 text-right items-center">
            <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-700">
              Next Step  →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1  items-center justify-between mt-6 ">
          <div className="bg-gray-500 rounded-l-xl pl-4">Add test details</div>
          <div className="bg-gray-500 pl-4">Add modules</div>
          <div className="bg-gray-500 pl-4">Add custom questions</div>
          <div className="bg-gray-500 pl-4 rounded-r-xl">Add candidates</div>
        </div>

        <div className=" bg-white grid grid-cols-2 gap-12 mt-6 p-10 px-10">
          <div>
            <label className="block font-medium mb-4">Role Name</label>
            <input
              type="text"
              placeholder="Name your role"
              className="w-full p-4 border rounded mt-1"
            />
          </div>

          <div>
            <label className="block font-medium mb-4">Work Arrangements</label>
            <select className="w-full p-4 border rounded mt-1">
              <option>Select a work arrangement</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-4">Industry</label>
            <select className="w-full p-4 border rounded mt-1">
              <option>Select an industry</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-4">Job Role</label>
            <select className="w-full p-4 border rounded mt-1">
              <option>Select a job role</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-4">Job Role Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full p-4 border rounded mt-1"
            />
          </div>

          <div>
            <label className="block font-medium mb-4">Experience Level</label>
            <div className="flex gap-8 mt-5">
              <button className="border rounded p-4 hover:bg-[#252E3A] hover:text-white">Entry Level</button>
              <button className="border rounded p-4 hover:bg-[#252E3A] hover:text-white">Mid Level</button>
              <button className="border rounded p-4 hover:bg-[#252E3A] hover:text-white">Senior Level</button>
              <button className="border rounded p-4 hover:bg-[#252E3A] hover:text-white">All Levels</button>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Createnewtest;
