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
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [checkedDepartments, setCheckedDepartments] = useState([]);
  const [checkedRoles, setCheckedRoles] = useState([]);
  const [departmentSearch, setDepartmentSearch] = useState("");
  const [roleSearch, setRoleSearch] = useState("");

  const handleOnChange = (event) => {
    setInputString(event.target.value);
  };

  const resetFilters = () => {
  setCheckedIndustries([]);
  setCheckedDepartments([]); 
  setCheckedRoles([]); 
  setIndustrySearch("");
  setDepartmentSearch("");
  setRoleSearch("");

  setFilteredDepartments([]); 
  setFilteredRoles([]); 

  localStorage.removeItem("checkedIndustries");
  localStorage.removeItem("checkedDepartments");
  localStorage.removeItem("checkedRoles");
  
};


  const industries = [
    "Accountancy",
    "Banking",
    "Corporate Finance",
    "Dexta Launch Industry 1",
    "Farzan Code",
    "Farzan Meta",
    "Hedge Funds",
    "Investment Banking",
    "Module not creating industry",
    "Private Equity",
    "test",
    "test 1",
    "test 2",
    "test 4",
    "Venture Capital",
  ];
  const departments = [
    "Dexta Launch Sub industry 1",
    "Dexta launch sub industry 2",
    "Farzan Code s1",
    "Farzan Code s3",
    "Farzan Code s4",
    "Farzan Meta s1",
    "Farzan Meta s2",
    "Farzan Meta s3",
    "Finance",
    "Human Resources",
    "Module not creating sub industry",
    "Operations",
    "Procurement",
    "Real Estate",
  ];

  const roles = [
    "Corporate Banking Operations Manager",
    "Customer Experience Analyst",
    "Customer Service Operations Specialist",
    "Customer Service Representative (CSR)",
    "Farzan Meta J1",
    "Financial Services Advisor",
    "Job",
    "New",
    "Operations Analyst",
    "Personal Banking Officer",
    "Relationship Manager",
    "Test Module Deleted X",
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
        department: "Dexta Launch Sub industry 1",
        role: "Corporate Banking Operations Manager",
      },
      {
        title: "Accountancy level 1",
        button1: "Entry",
        time: "30 mins",
        button2: "Sample Question",
        level: "Entry Level",
        industry: "Corporate Finance",
        department: "Dexta Launch Sub industry 2",
        role: "Customer Experience Analyst",
      },
      {
        title: "Accounting level 1",
        button1: "Entry",
        time: "45 mins",
        button2: "Sample Question",
        level: "Entry Level",
        industry: "Dexta Launch Industry 1",
        department: "Farzan Code s1",
        role: "Customer Service Operations Specialist",
      },
      {
        title: "Agile ways of working L1",
        button1: "Senior",
        time: "12 mins",
        button2: "Sample Question",
        level: "Senior Level",
        industry: "Dexta Launch Industry 1",
        department: "Farzan Code s3",
        role: "Customer Service Representative (CSR)",
      },
      {
        title: "Basic to beginner changewww",
        button1: "Senior",
        time: "12 mins",
        button2: "Sample Question",
        level: "Senior Level",
        industry: "Farzan Code",
        department: "Farzan Code s4",
        role: "Farzan Meta J1",
      },
      {
        title: "cropped images checking",
        button1: "Senior",
        time: "12 mins",
        button2: "Sample Question",
        level: "Senior Level",
        industry: "Farzan Meta",
        department: "Farzan Meta s1",
        role: "Financial Services Advisor",
      },
      {
        title: "cropped images checking",
        button1: "Senior",
        time: "12 mins",
        button2: "Sample Question",
        level: "Senior Level",
        industry: "Hedge Funds",
        department: "Farzan Meta s2",
        role: "Job",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Investment Banking",
        department: "Farzan Meta s3",
        role: "New",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Banking",
        department: "Finance",
        role: "Operations Analyst",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Hedge Funds",
        department: "Human Resources",
        role: "Personal Banking Officer",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Accountancy",
        department: "Module not creating sub industry",
        role: "Relationship Manager",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Farzan Meta",
        department: "Operations",
        role: "Test Module Deleted X",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Farzan Meta",
        department: "Procurement",
        role: "Software Engineer",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Farzan Meta",
        department: "Real Estate",
        role: "Cloud Engineer",
      },
      {
        title: "cropped images checking",
        button1: "Mid",
        time: "12 mins",
        button2: "Sample Question",
        level: "Mid Level",
        industry: "Farzan Meta",
        department: "Finance",
        role: "AI Researcher",
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

    const departmentMatches =
      filteredDepartments.length === 0 ||
      filteredDepartments.includes(card.department);

    const roleMatches =
      filteredRoles.length === 0 || filteredRoles.includes(card.role);

    return levelMatches && industryMatches && departmentMatches && roleMatches;
  });

  const handleCreateTestClick = () => {
    navigate("/Create-new-test");
  };

  return (
    <>
      <Header />
      <div>
        <div className="px-6 flex bg-[#F6F7F7]  justify-between pt-6 pb-8 items-center overflow-y-auto no-scrollbar">
          <h1 className="flex text-xl font-bold  items-center">
            <FaRegCircleCheck className="mr-2 " />
            Modules
          </h1>
          <div className="flex px-4">
            <div className="relative">
              <input
                className="bg-white p-2 px-4 border-1 border-gray-100 rounded-md text-md"
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
                className="flex items-center p-2 px-4 bg-[#C0FF06] ml-4 text-md border-1 border-gray-100 rounded-md hover:bg-[#252E3A] hover:text-white"
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
            departments={departments}
            roles={roles}
            filteredDepartments={filteredDepartments}
            setFilteredDepartments={setFilteredDepartments}
            filteredRoles={setFilteredRoles}
            setFilteredRoles={setFilteredRoles}
          />

          <Cardcontainer filteredCards={filteredCards} />

        </div>
      </div>
    </>
  );
};

export default Dashboard;
