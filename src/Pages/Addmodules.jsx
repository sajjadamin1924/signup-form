import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import Header from "../Components/Header";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";

const Addmodules = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedModules, setSelectedModules] = useState(Array(5).fill(null));

  // Example available modules
  const availableModules = [
    { id: 1, name: "Module 1", description: "Description of Module 1" },
    { id: 2, name: "Module 2", description: "Description of Module 2" },
    { id: 3, name: "Module 3", description: "Description of Module 3" },
    { id: 4, name: "Module 4", description: "Description of Module 4" },
    { id: 5, name: "Module 5", description: "Description of Module 5" },
  ];

  // Function to add a module when clicking on a card
  const handleModuleSelect = (module) => {
    const index = selectedModules.findIndex((m) => m === null);
    if (index !== -1) {
      const updatedModules = [...selectedModules];
      updatedModules[index] = module.name;
      setSelectedModules(updatedModules);
    }
  };

  // Check if at least one module is selected
  const isNextEnabled = selectedModules.filter(Boolean).length > 0;

  // Handle Next Step navigation
  const handleNextStep = () => {
    if (isNextEnabled) {
      navigate("/add-custom-questions"); // Update with your actual route
    }
  };

  return (
    <>
      <Header />
      <div className="bg-[#F6F7F7] px-4 rounded-lg mb-10">
        {/* Header Section */}
        <div className="flex items-center justify-between py-6">
          <div className="flex space-x-8 items-center">
            <h2 className="text-2xl font-semibold">
              <FaRegFileAlt className="inline-block mr-2 text-2xl" />
              Create New Test
            </h2>
            <p>
              <CiCirclePlus className="inline-block mr-2" />
              Added modules ({selectedModules.filter(Boolean).length})
            </p>
            <p>
              <FaRegCircleCheck className="inline-block mr-2" />0 mins
            </p>
          </div>
          <div className="text-right">
            <button className="mr-4 text-gray-600">Go back</button>
            <button
              onClick={handleNextStep}
              disabled={!isNextEnabled}
              className={`px-6 py-2.5 rounded-lg ${
                isNextEnabled
                  ? "bg-blue-600 text-white cursor-pointer"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-4 gap-1 items-center justify-between mt-6">
          <div className="pl-4 bg-[#FF512D] text-white rounded-l-xl ">
            Add test details
          </div>
          <div
            className={`pl-4  ${
              isNextEnabled ? "bg-blue-500 text-white" : "bg-[#D3D5D8]"
            }`}
          >
            Add modules
          </div>
          <div className="bg-[#D3D5D8] pl-4 ">Add custom questions</div>
          <div className="bg-[#D3D5D8] pl-4 rounded-r-xl">
            Add candidates
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex justify-between p-6">
          {/* Left: Add Modules Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg w-96">
            <h2 className="text-lg font-semibold">Add modules</h2>
            <p className="text-sm text-gray-600 mt-2">
              Your test can include up to <strong>5 modules</strong>. Scroll and
              select modules on the right. Use different types of modules for
              the best results.
            </p>

            <h3 className="mt-4 font-semibold">You have added:</h3>
            <div className="mt-2 space-y-2">
              {selectedModules.map((module, index) => (
                <button
                  key={index}
                  className="w-full py-2 px-4 border border-gray-300 rounded text-gray-500 text-left bg-gray-100"
                >
                  {module ? module : `Select module ${index + 1}`}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Available Modules Section (Cards) */}
          <div className="flex-1 p-6 bg-white shadow-lg rounded-lg ml-6 ">
            <div className="flex space-x-4">
              
              <h2 className="text-lg font-semibold">suggested Modules</h2>
              <h2 className="text-lg font-semibold">All modules</h2>
              <div className="p-2 items-end
               ">
              <input type="text"
              placeholder="search test module by library here" />
            </div>
            </div>
            

            <div className="grid grid-cols-3 gap-4 mt-4">
              {availableModules.map((module) => (
                <div
                  key={module.id}
                  className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50"
                  onClick={() => handleModuleSelect(module)}
                >
                  <h3 className="font-medium">{module.name}</h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addmodules;
