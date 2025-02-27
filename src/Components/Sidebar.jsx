import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({
  selectedLevel,
  setSelectedLevel,
  industries,
  checkedIndustries,
  setCheckedIndustries,
  industrySearch,
  setIndustrySearch,
  resetFilters,
}) => {
  useEffect(() => {
    const savedLevel = localStorage.getItem("selectedLevel");
    if (savedLevel) {
      setSelectedLevel(savedLevel);
    }
  }, [setSelectedLevel]);

  const handleLevelSelection = (level) => {
    setSelectedLevel(level);
    localStorage.setItem("selectedLevel", level);
  };

  const filteredIndustries = industries.filter((industry) =>
    industry.toLowerCase().includes(industrySearch.toLowerCase())
  );

  const handleIndustryCheckboxChange = (industry) => {
    setCheckedIndustries((prevChecked) => {
      if (prevChecked.includes(industry)) {
        return prevChecked.filter((item) => item !== industry);
      } else {
        return [...prevChecked, industry];
      }
    });
  };

  return (
    <div className="w-1/4 bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-xl mb-6 font-bold">Experience Level</h1>
        <FontAwesomeIcon
          className="text-xl text-gray-400 mb-6"
          icon={faAngleUp}
        />
      </div>
      <div className="grid grid-flow-col grid-rows-2 gap-4 mt-4 p-4">
        {["Entry Level", "Mid Level", "Senior Level", "All Level"].map(
          (level) => (
            <button
              key={level}
              onClick={() => handleLevelSelection(level)}
              className={`${
                selectedLevel === level
                  ? "bg-black text-white hover:bg-blue-600 cursor-pointer"
                  : "bg-[#F6F7F7] text-black cursor-pointer"
              } p-4 rounded-xl text-xl`}
            >
              {level}
            </button>
          )
        )}
      </div>
      <hr />
      <div className="flex justify-between items-center px-4 mt-4">
        <h1 className="text-xl mb-6 font-bold">Industry</h1>
        <FontAwesomeIcon
          className="text-xl text-gray-400 mb-6"
          icon={faAngleUp}
        />
      </div>
      <div className="relative px-4">
        <input
          name="Search"
          className="bg-white p-2 pr-10 border-2 border-black rounded-md text-xl w-full"
          type="text"
          placeholder="Search industry here..."
          value={industrySearch}
          onChange={(e) => setIndustrySearch(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-2xl text-gray-500"
        />
      </div>

      <div className="px-6 overflow-y-auto max-h-80 relative">
        <ul className="text-lg p-2">
          {filteredIndustries.length > 0 ? (
            filteredIndustries.map((industry, index) => (
              <li className="p-2" key={index}>
                <input
                  name="checkbox"
                  type="checkbox"
                  className="accent-[#252E3A] text-[#C0FF06] w-4 h-4 mr-2 rounded-sm"
                  checked={checkedIndustries.includes(industry)}
                  onChange={() => handleIndustryCheckboxChange(industry)}
                />
                {industry}
              </li>
            ))
          ) : (
            <p className="text-2xl text-red-600">
              Your input does not match any industry.
            </p>
          )}
        </ul>
      </div>

      {checkedIndustries.length > 0 && (
        <button
          onClick={resetFilters}
          className="mt-4 px-4 py-2 bg-[#C0FF06] bottom-0 text-gray-500 text-xl font-bold rounded-md hover:bg-[#252E3A] hover:text-white w-full"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default Sidebar;
