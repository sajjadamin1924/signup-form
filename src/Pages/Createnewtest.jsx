import React, { useState, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import Header from "../Components/Header";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { Context } from "../context/Context";


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

const roleNameStyles = {
  control: (provided) => ({
    ...provided,
    height: "56px",
    minHeight: "56px",
    borderRadius: "6px",
    borderColor: "#D1D5DB",
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

  const {formattedIndustries,formattedRoles} = useContext(Context);
  const industryOptionsWithAll = [{ value: "all", label: "Select All" }, ...formattedIndustries];
  const roleOptionsWithAll = [{ value: "all", label: "Select All" }, ...formattedRoles];
  const navigate = useNavigate();
  
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedWorkArrangement, setSelectedWorkArrangement] = useState(null);
  const [roleName, setRoleName] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  const countryOptions = useMemo(() => [
    { value: "global", label: "Global" },
    ...countryList().getData(),
  ], []);

  const handleIndustryChange = (selected) => {
    if (selected.some((option) => option.value === "all")) {
      setSelectedIndustry(formattedIndustries);
    } else {
      setSelectedIndustry(selected);
    }
  };

  const handleRoleChange = (selected) => {
    if (selected.some((option) => option.value === "all")) {
      setSelectedRole(formattedRoles);
    } else {
      setSelectedRole(selected);
    }
  };

  const isFormComplete = roleName && selectedIndustry.length > 0 && selectedRole.length > 0 && selectedLocation.length > 0 && selectedWorkArrangement && selectedExperience;

  const handleNextStep = () => {
    if (isFormComplete) {
      navigate("/add-modules");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-[#F6F7F7] px-4 rounded-lg mb-10">
        <div className="flex items-center justify-between py-6">
          <div className="flex space-x-8 items-center">
            <h2 className="text-2xl font-semibold ">
              <FaRegFileAlt className="inline-block mr-2 text-2xl items-center mb-1" />
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
          <div className="text-right">
            <button
              className={`px-12 py-2.5 rounded ${
                isFormComplete ? "bg-[#C0FF06] text-black" : "bg-[#D3D5D8] text-[#7C8289]"
              }`}
              onClick={handleNextStep}
              disabled={!isFormComplete}
            >
              Next Step →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 items-center justify-between mt-6">
          <div className={`pl-4 rounded-l-xl ${isFormComplete ? "bg-[#FF5812] text-white" : "bg-[#D3D5D8]"}`}>
            Add test details
          </div>
          <div className="bg-[#D3D5D8] pl-4">Add modules</div>
          <div className="bg-[#D3D5D8] pl-4">Add custom questions</div>
          <div className="bg-[#D3D5D8] pl-4 rounded-r-xl">Add candidates</div>
        </div>

        <div className="bg-white grid grid-cols-2 gap-12 mt-6 p-10 px-10">
          <div>
            <label className="block font-medium mb-2">Role Name</label>
            <input
              type="text"
              placeholder="Name your role"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-3"
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
              {["Entry Level", "Mid Level", "Senior Level", "All Levels"].map((level) => (
                <button
                  key={level}
                  className={`border rounded p-4 h-[56px] w-full ${
                    selectedExperience === level ? "bg-[#252E3A] text-white" : "hover:bg-[#252E3A] hover:text-white"
                  }`}
                  onClick={() => setSelectedExperience(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createnewtest;
