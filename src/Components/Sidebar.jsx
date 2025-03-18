import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({
  selectedLevel,
  setSelectedLevel,
  industries,
  checkedIndustries,
  setCheckedIndustries,
  industrySearch,
  setIndustrySearch,
  resetFilters,
  departments,
  roles,
  setFilteredDepartments,
  setFilteredRoles,
}) => {
  const [isLevelCollapsed, setIsLevelCollapsed] = useState(false);
  const [isIndustryCollapsed, setIsIndustryCollapsed] = useState(false);
  const [isDepartmentCollapsed, setIsDepartmentCollapsed] = useState(false);
  const [isRoleCollapsed, setIsRoleCollapsed] = useState(false);

  const [checkedDepartments, setCheckedDepartments] = useState([]);
  const [checkedRoles, setCheckedRoles] = useState([]);
  const [departmentSearch, setDepartmentSearch] = useState("");
  const [roleSearch, setRoleSearch] = useState("");

  // Load stored filters on mount
  useEffect(() => {
    const savedLevel = localStorage.getItem("selectedLevel");
    if (savedLevel) setSelectedLevel(savedLevel);

    const savedCheckedIndustries = localStorage.getItem("checkedIndustries");
    if (savedCheckedIndustries) setCheckedIndustries(JSON.parse(savedCheckedIndustries));

    const savedCheckedDepartments = localStorage.getItem("checkedDepartments");
    if (savedCheckedDepartments) setCheckedDepartments(JSON.parse(savedCheckedDepartments));

    const savedCheckedRoles = localStorage.getItem("checkedRoles");
    if (savedCheckedRoles) setCheckedRoles(JSON.parse(savedCheckedRoles));
  }, [setSelectedLevel, setCheckedIndustries, setCheckedDepartments, setCheckedRoles]);

  // Save selection in localStorage
  const handleCheckboxChange = (item, setChecked, checkedKey) => {
    setChecked((prevChecked) => {
      let updatedChecked;
      if (prevChecked.includes(item)) {
        updatedChecked = prevChecked.filter((i) => i !== item);
      } else {
        updatedChecked = [...prevChecked, item];
      }
      localStorage.setItem(checkedKey, JSON.stringify(updatedChecked));
      return updatedChecked;
    });
  };

  // Reset all filters
  const handleResetFilters = () => {
    setCheckedIndustries([]);
    setCheckedDepartments([]);
    setCheckedRoles([]);
    localStorage.removeItem("checkedIndustries");
    localStorage.removeItem("checkedDepartments");
    localStorage.removeItem("checkedRoles");
    localStorage.removeItem("selectedLevel");

    resetFilters();
  };

  useEffect(() => {
    setFilteredDepartments(checkedDepartments);
  }, [checkedDepartments, setFilteredDepartments]);

  useEffect(() => {
    setFilteredRoles(checkedRoles);
  }, [checkedRoles, setFilteredRoles]);

  return (
    <div className="w-1/4 bg-white p-4 rounded-xl   overflow-y-auto no-scrollbar ">
      {/* Experience Level Section */}
      <div className="flex justify-between items-center px-2">
        <h1 className="text-md mb-6 font-bold">Experience Level</h1>
        <FontAwesomeIcon
          className="text-xl text-gray-400 mb-6 cursor-pointer"
          icon={isLevelCollapsed ? faAngleDown : faAngleUp}
          onClick={() => setIsLevelCollapsed((prev) => !prev)}
        />
      </div>

      {!isLevelCollapsed && (
        <div className="grid grid-flow-col grid-rows-2 gap-2 mt-4">
          {["Entry Level", "Mid Level", "Senior Level", "All Level"].map((level) => (
            <button
              key={level}
              onClick={() => {
                setSelectedLevel(level);
                localStorage.setItem("selectedLevel", level);
              }}
              className={`${
                selectedLevel === level
                  ? "bg-black text-white hover:bg-blue-600 cursor-pointer"
                  : "bg-[#F6F7F7] text-black cursor-pointer"
              } px-6 py-4 rounded-sm text-sm font-medium mb-4`}
            >
              {level}
            </button>
          ))}
        </div>
      )}

      <hr />

      {/* Industry Section */}
      <div className="flex justify-between items-center px-4 mt-4">
        <h1 className="text-md mb-6 font-bold">Industry</h1>
        <FontAwesomeIcon
          className="text-xl text-gray-400 mb-6 cursor-pointer"
          icon={isIndustryCollapsed ? faAngleDown : faAngleUp}
          onClick={() => setIsIndustryCollapsed((prev) => !prev)}
        />
      </div>

      {!isIndustryCollapsed && (
        <>
          <div className="relative px-4">
            <input
              type="text"
              placeholder="Search industry here..."
              value={industrySearch}
              onChange={(e) => setIndustrySearch(e.target.value)}
              className="bg-white p-2 pr-10 border-2 border-black rounded-md text-md w-full"
            />
          </div>

          <div className="px-6 overflow-y-auto max-h-80 scrollbar relative">
            <ul className="text-sm font-medium p-2">
              {industries
                .filter((industry) => industry.toLowerCase().includes(industrySearch.toLowerCase()))
                .map((industry, index) => (
                  <li className="p-2" key={index}>
                    <input
                      type="checkbox"
                      checked={checkedIndustries.includes(industry)}
                      onChange={() => handleCheckboxChange(industry, setCheckedIndustries, "checkedIndustries")}
                      className="accent-[#252E3A] w-4 h-4 mr-2 rounded-sm"
                    />
                    {industry}
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}

      
      <div className="flex justify-between items-center px-4 mt-4">
        <h1 className="text-md mb-6 font-bold">Departments</h1>
        <FontAwesomeIcon
          className="text-xl text-gray-400 mb-6 cursor-pointer"
          icon={isDepartmentCollapsed ? faAngleDown : faAngleUp}
          onClick={() => setIsDepartmentCollapsed((prev) => !prev)}
        />
      </div>

      {!isDepartmentCollapsed && (
        <>
          <div className="relative px-4">
            <input
              type="text"
              placeholder="Search departments..."
              value={departmentSearch}
              onChange={(e) => setDepartmentSearch(e.target.value)}
              className="bg-white p-2 pr-10 border-2 border-black rounded-md text-md w-full"
            />
          </div>

          <div className="px-6 overflow-y-auto max-h-80 scrollbar relative">
            <ul className="text-sm font-medium p-2">
              {departments
                .filter((department) => department.toLowerCase().includes(departmentSearch.toLowerCase()))
                .map((department, index) => (
                  <li className="p-2" key={index}>
                    <input
                      type="checkbox"
                      checked={checkedDepartments.includes(department)}
                      onChange={() => handleCheckboxChange(department, setCheckedDepartments, "checkedDepartments")}
                      className="accent-[#252E3A] w-4 h-4 mr-2 rounded-sm"
                    />
                    {department}
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
      


      <div className="flex justify-between items-center px-4 mt-4">
        <h1 className="text-md mb-6 font-bold">Job Role</h1>
        <FontAwesomeIcon
          className="text-xl text-gray-400 mb-6 cursor-pointer"
          icon={isRoleCollapsed ? faAngleDown : faAngleUp}
          onClick={() => setIsRoleCollapsed((prev) => !prev)}
        />
      </div>

      {!isRoleCollapsed && (
        <>
          <div className="relative px-4">
            <input
              type="text"
              placeholder="Search Job Role..."
              value={roleSearch}
              onChange={(e) => setRoleSearch(e.target.value)}
              className="bg-white p-2 pr-10 border-2 border-black rounded-md text-md w-full"
            />
          </div>

          <div className="px-6 overflow-y-auto max-h-80 scrollbar relative">
            <ul className="text-sm font-medium p-2">
              {roles
                .filter((role) => role.toLowerCase().includes(roleSearch.toLowerCase()))
                .map((role, index) => (
                  <li className="p-2" key={index}>
                    <input
                      type="checkbox"
                      checked={checkedRoles.includes(role)}
                      onChange={() => handleCheckboxChange(role, setCheckedRoles, "checkedRoles")}
                      className="accent-[#252E3A] w-4 h-4 mr-2 rounded-sm"
                    />
                    {role}
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
      

      
      {(checkedIndustries.length > 0 || checkedDepartments.length > 0 || checkedRoles.length > 0) && (
        <button onClick={handleResetFilters} className="mt-4 px-4 py-2 bg-[#C0FF06] w-full text-gray-500 font-bold rounded-md hover:bg-[#252E3A] hover:text-white">
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default Sidebar;
