import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Cardcontainer from "../../Components/Cardcontainer";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [inputString, setInputString] = useState("");
  const [industrySearch, setIndustrySearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Level");
  const [checkedIndustries, setCheckedIndustries] = useState([]);

  const handleOnChange = (event) => {
    setInputString(event.target.value);
  };

  const resetFilters = () => {
    setCheckedIndustries([]);
    setIndustrySearch("");
    setSelectedLevel("All Level");
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

  useEffect(() => {
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
        industry: "Hedge Funds",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Accountancy",
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
        industry: "Accountancy",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Accountancy",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Accountancy",
      },
    ];

    setData(cardsData);
  }, []);

  useEffect(() => {
    if (inputString !== "") {
      let filtered = data.filter((card) => {
        return card?.title.includes(inputString);
      });
      setData(filtered);
    }
  }, [inputString, data]);

  const filteredCards = data.filter((card) => {
    const levelMatches =
      selectedLevel === "All Level" || card.level === selectedLevel;
    const industryMatches =
      checkedIndustries.length === 0 ||
      checkedIndustries.includes(card.industry);
    return levelMatches && industryMatches;
  });

  
  const handleCreateTestClick = () => {
    navigate("/Createnewtest");
  };

  return (
    <>
      <Header />
      <div className="bg-gray-900">
        <div className="px-4 flex bg-[#F6F7F7] mt-6 justify-between pt-6 pb-8 items-center">
          <h1 className="flex text-2xl font-bold  items-center">
            <FaRegCircleCheck className="mr-2 text-2xl" />
            Modules
          </h1>
          <div className="flex px-4">
            <div className="relative">
              <input
                className="bg-white p-2 px-4 border-2 border-black rounded-md text-md"
                type="text"
                placeholder="Search module here..."
                onChange={handleOnChange}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-2 top-1/2 transform -translate-y-1/2  text-gray-500"
              />
            </div>
            <div>
              <button
                className="flex items-center p-2 px-4 bg-[#C0FF06] ml-4 text-md border-2 border-black rounded-md hover:bg-[#252E3A] hover:text-white"
                onClick={handleCreateTestClick}
              >
                <FaRegFileAlt className="mr-2" />
                Create new test
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-6 p-6  bg-[#F6F7F7]">
          <Sidebar
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            industries={industries}
            checkedIndustries={checkedIndustries}
            setCheckedIndustries={setCheckedIndustries}
            industrySearch={industrySearch}
            setIndustrySearch={setIndustrySearch}
            resetFilters={resetFilters}
          />

          <Cardcontainer filteredCards={filteredCards} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
