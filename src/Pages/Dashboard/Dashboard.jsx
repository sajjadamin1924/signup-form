import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { FaRegCircleCheck } from "react-icons/fa6";

import Card from "../../Components/Card";
import { FaRegFileAlt } from "react-icons/fa";

const Dashboard = () => {
  const [industrySearch, setIndustrySearch] = useState("");
  const [data, setData] = useState([]);
  const [inputString, setInputString] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Level");
  const [checkedIndustries, setCheckedIndustries] = useState([]);

  const handleOnChange = (event) => {
    setInputString(event.target.value);
  };

  const handleIndustrySearchChange = (event) => {
    setIndustrySearch(event.target.value);
  };

  const industries = [
    "Accountancy",
    "Corporate Finance",
    "Dexta Launch Industry 1",
    "Farzan Code",
    "Farzan Meta",
    "Hedge Funds",
    "Investment Banking",
    "Banking",
  ];

  const filteredIndustries = industries.filter((industry) =>
    industry.toLowerCase().includes(industrySearch.toLowerCase())
  );

  const cardsData = [
    {
      title: "5 baj gaye hain",
      button1: "Entry",
      time: "12 mins",
      button2: "Sample Question",
      level: "Entry Level",
      industry: "Accountancy",
    },
    {
      title: "Accountancy level 1",
      button1: "Entry",
      time: "30 mins",
      button2: "Sample Question",
      level: "Entry Level",
      industry: "Corporate Finance",
    },
    {
      title: "Accounting level 1",
      button1: "Entry",
      time: "45 mins",
      button2: "Sample Question",
      level: "Entry Level",
      industry: "Dexta Launch Industry 1",
    },

    {
      title: "Agile ways of working L1",
      button1: "Senior",
      time: "12 mins",
      button2: "Sample Question",
      level: "Senior Level",
      industry: "Dexta Launch Industry 1",
    },
    {
      title: "Basic to beginner changewww",
      button1: "Senior",
      time: "12 mins",
      button2: "Sample Question",
      level: "Senior Level",
      industry: "Farzan Code",
    },
    {
      title: "cropped images checking",
      button1: "Senior",
      time: "12 mins",
      button2: "Sample Question",
      level: "Senior Level",
      industry: "Farzan Meta",
    },
    {
      title: "cropped images checking",
      button1: "Senior",
      time: "12 mins",
      button2: "Sample Question",
      level: "Senior Level",
      industry: "Hedge Funds",
    },
    {
      title: "cropped images checking",
      button1: "Mid",
      time: "12 mins",
      button2: "Sample Question",
      level: "Mid Level",
      industry: "Investment Banking",
    },
    {
      title: "cropped images checking",
      button1: "Mid",
      time: "12 mins",
      button2: "Sample Question",
      level: "Mid Level",
      industry: "Banking",
    },
    {
      title: "cropped images checking",
      button1: "Mid",
      time: "12 mins",
      button2: "Sample Question",
      level: "Mid Level",
    },
    {
      title: "cropped images checking",
      button1: "Mid",
      time: "12 mins",
      button2: "Sample Question",
      level: "Mid Level",
    },
    {
      title: "cropped images checking",
      button1: "Mid",
      time: "12 mins",
      button2: "Sample Question",
      level: "Mid Level",
      industry: "Farzan Meta",
    },
    {
      title: "cropped images checking",
      button1: "Mid",
      time: "12 mins",
      button2: "Sample Question",
      level: "Mid Level",
      industry: "Banking",
    },
  ];

  useEffect(() => {
    setData(cardsData);

    if (inputString !== "") {
      let filtered = cardsData.filter((card) => {
        return card?.title.includes(inputString);
      });
      setData(filtered);
    }
  }, [inputString]);

  const filteredCards = data.filter((card) => {
    const levelMatches =
      selectedLevel === "All Level" || card.level === selectedLevel;
    const industryMatches =
      checkedIndustries.length === 0 ||
      checkedIndustries.includes(card.industry);
    return levelMatches && industryMatches;
  });

  const handleIndustryCheckboxChange = (industry) => {
    setCheckedIndustries((prevChecked) => {
      if (prevChecked.includes(industry)) {
        return prevChecked.filter((item) => item !== industry);
      } else {
        return [...prevChecked, industry];
      }
    });
  };

  const resetFilters = () => {
    setCheckedIndustries([]);
    setIndustrySearch("");
    setSelectedLevel("All Level");
  };

  return (
    <>
      <Header />
      <div>
        <div className="px-4 flex bg-[#F6F7F7] mt-6 justify-between pt-6 pb-8 items-center">
          <h1 className=" flex text-2xl font-bold px-4 items-center">
            <FaRegCircleCheck className="mr-2 text-2xl" />
            Modules
          </h1>
          <div className="flex px-4">
            <div className="relative ">
              <input
                className="bg-white p-2 px-4 border-2 border-black rounded-md text-xl"
                type="text"
                placeholder="Search module here..."
                onChange={handleOnChange}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 px-2"
              />
            </div>
            <div>
              <button className=" flex items-center p-2 px-4 bg-[#C0FF06] ml-4 text-xl border-2  border-black rounded-md">
                <FaRegFileAlt className="mr-2" />
                Create new test
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-6 p-6 bg-[#F6F7F7]">
          <div className="w-1/4 bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center px-4">
              <h1 className="text-xl mb-6 font-bold">Experience Level</h1>
              <FontAwesomeIcon
                className="text-xl  text-gray-400 mb-6"
                icon={faAngleUp}
              />
            </div>
            <div className="grid grid-flow-col grid-rows-2 gap-4 mt-4 p-4">
              <button
                onClick={() => setSelectedLevel("Entry Level")}
                className={`${
                  selectedLevel === "Entry Level"
                    ? "bg-black text-white hover:bg-blue-600 cursor-pointer"
                    : "bg-[#F6F7F7] text-black cursor-pointer"
                } p-4 rounded-xl text-xl`}
              >
                Entry Level
              </button>

              <button
                onClick={() => setSelectedLevel("Mid Level")}
                className={`${
                  selectedLevel === "Mid Level"
                    ? "bg-black text-white hover:bg-amber-600 cursor-pointer"
                    : "bg-[#F6F7F7] text-black cursor-pointer"
                } p-4 rounded-xl text-xl`}
              >
                Mid Level
              </button>
              <button
                onClick={() => setSelectedLevel("Senior Level")}
                className={`${
                  selectedLevel === "Senior Level"
                    ? "bg-black text-white hover:bg-red-600 cursor-pointer"
                    : "bg-[#F6F7F7] text-black cursor-pointer"
                } p-4 rounded-xl text-xl`}
              >
                Senior Level
              </button>
              <button
                onClick={() => setSelectedLevel("All Level")}
                className={`${
                  selectedLevel === "All Level"
                    ? "bg-black text-white hover:bg-green-600 cursor-pointer"
                    : "bg-[#F6F7F7] text-black cursor-pointer"
                } p-4 rounded-xl text-xl`}
              >
                All Level
              </button>
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
                className="bg-white p-2 pr-10 border-2 border-black rounded-md text-xl w-full"
                type="text"
                placeholder="Search industry here..."
                onChange={handleIndustrySearchChange}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>

            <div className="px-6 overflow-y-auto max-h-80 relative">
              <ul className="text-lg p-2">
                {filteredIndustries.length > 0 ? (
                  filteredIndustries.map((industry, index) => (
                    <li className="p-2" key={index}>
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 rounded-sm"
                        checked={checkedIndustries.includes(industry)}
                        onChange={() => handleIndustryCheckboxChange(industry)}
                      />
                      {industry}
                    </li>
                  ))
                ) : (
                  <p>No matching industries</p>
                )}
              </ul>
            </div>

            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-[#C0FF06]  bottom-0 text-white rounded-md hover:bg-black w-full"
            >
              Reset Filters
            </button>
          </div>

          <div className="w-3/4 bg-white p-6 rounded-xl">
            <div>
              <h1 className="px-4 text-2xl">28 Modules in English</h1>
            </div>
            <div className="w-full max-h-[800px] overflow-y-auto ">
              <div className="grid grid-flow-row grid-rows-1 grid-cols-4 gap-6 mt-4 px-6  ">
                {filteredCards.length > 0 ? (
                  filteredCards.map((card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      button1={card.button1}
                      time={card.time}
                      button2={card.button2}
                    />
                  ))
                ) : (
                  <p className="text-3xl">No Data</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
