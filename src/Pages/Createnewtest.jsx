import React, { useState,useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Header from "../Components/Header";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";

const industryOptions = [
  { value: "accountancy", label: "Accountancy" },
  { value: "banking", label: "Banking" },
  { value: "corporate finance", label: "Corporate Finance" },
];

const roleOptions = [
  { value: "corporate banking operations manager", label: "Corporate Banking Operations Manager" },
  { value: "customer experience analyst", label: "Customer Experience Analyst" },
  { value: "customer service operations specialist", label: "Customer Service Operations Specialist" },
];



const workArrangementOptions = [
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
  { value: "onsite", label: "On-site" },
];

const industryOptionsWithAll = [
  { value: "all", label: "Select All" },
  ...industryOptions,
];
const roleOptionsWithAll = [
  { value: "all", label: "Select All" },
  ...roleOptions,
];


const roleNameStyles = {
  control: (provided) => ({
    ...provided,
    height: "56px",
    minHeight: "56px",
    borderRadius: "6px",
    borderColor: "#D1D5DB",
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: "56px",
    minHeight: "56px",
    borderRadius: "6px",
    borderColor: state.isFocused ? "#D1D5DC" : "#D1D5DB",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#6B7280",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "#6B7280",
  }),
};
const getCustomOptions = (options) =>
  options.map((option) => ({
    ...option,
    label: (
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" checked={false} readOnly />
        {option.label}
      </div>
    ),
  }));

const Createnewtest = () => {
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedWorkArrangement, setSelectedWorkArrangement] = useState(null);

  const countryOptions = useMemo(() => [
    { value: "global", label: "Global" },
    ...countryList().getData(),
  ], []);
  
  const handleIndustryChange = (selected) => {
    if (selected.some((option) => option.value === "all")) {
      setSelectedIndustry(industryOptions);
    } else {
      setSelectedIndustry(selected);
    }
  };

  const handleRoleChange = (selected) => {
    if (selected.some((option) => option.value === "all")) {
      setSelectedRole(roleOptions);
    } else {
      setSelectedRole(selected);
    }
  };
  const handleLocationChange = (selected) => {
    setSelectedLocation(selected);
  };
  
  return (
    <>
      <Header />

      <div className="bg-[#F6F7F7] px-4 rounded-lg mb-10">
        <div className="flex items-center justify-between py-6">
          <div className="flex space-x-8 items-center">
            <h2 className="text-2xl font-semibold mb-4">
              <FaRegFileAlt className="inline-block mr-2 text-2xl" />
              Create New Test
            </h2>

            <p>
              <CiCirclePlus className="inline-block mr-2" />
              Added modules (0)
            </p>

            <p>
              <FaRegCircleCheck className="inline-block mr-2" />0 mins
            </p>
          </div>
          <div className="text-right ">
            <button className="bg-[#D3D5D8] text-[#7C8289] px-12 py-2.5 rounded ">
              Next Step →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 items-center justify-between mt-6">
          <div className="bg-[#D3D5D8] rounded-l-xl pl-4">Add test details</div>
          <div className="bg-[#D3D5D8] pl-4">Add modules</div>
          <div className="bg-[#D3D5D8] pl-4">Add custom questions</div>
          <div className="bg-[#D3D5D8] pl-4 rounded-r-xl">Add candidates</div>
        </div>

        <div className="bg-white grid grid-cols-2 gap-12 mt-6 p-10 px-10">
          <div>
            <label className="block font-medium mb-2">Role Name</label>
            <Select
              type="text"
              placeholder="Name your role"
              styles={roleNameStyles}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Work Arrangements</label>
            <Select
              options={workArrangementOptions}
              value={selectedWorkArrangement}
              onChange={setSelectedWorkArrangement}
              isClearable
              placeholder="Please select a work arrangement"
              styles={customStyles}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Industry</label>
            <Select
              options={getCustomOptions(industryOptionsWithAll)}
              value={selectedIndustry}
              onChange={handleIndustryChange}
              isMulti
              isSearchable
              placeholder="Select industry"
              styles={customStyles}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Job Role</label>
            <Select
              options={getCustomOptions(roleOptionsWithAll)}
              value={selectedRole}
              onChange={handleRoleChange}
              isMulti
              isSearchable
              placeholder="Select job role"
              styles={customStyles}
            />
          </div>

          <div>
            <label className="block font-medium mb-4">Job Role Location</label>
            <Select
              options={getCustomOptions(countryOptions)}
              value={selectedLocation}
              onChange={setSelectedLocation}
              isMulti
              isSearchable
              placeholder="Select location"
              styles={customStyles}
            />
          </div>

          <div>
            <label className="block font-medium mb-4">Experience Level</label>
            <div className="grid grid-cols-4 gap-4">
              <button className="border rounded p-4 h-[56px] w-full hover:bg-[#252E3A] hover:text-white">
                Entry Level
              </button>
              <button className="border rounded p-4 h-[56px] w-full hover:bg-[#252E3A] hover:text-white">
                Mid Level
              </button>
              <button className="border rounded p-4 h-[56px] w-full hover:bg-[#252E3A] hover:text-white">
                Senior Level
              </button>
              <button className="border rounded p-4 h-[56px] w-full hover:bg-[#252E3A] hover:text-white">
                All Levels
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createnewtest;
