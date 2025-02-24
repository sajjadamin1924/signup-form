import React, { useState } from "react";
import Header from "../../Components/Header";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons/faSquareCaretUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faMagnifyingGlass,

} from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

import Card from "../../Components/Card";

const Dashboard = () => {
  const [selectedLevel,setSelectedLevel] = useState('All Level');

  const cardsData = [
    {
      title: "5 baj gaye hain",
      button1: "beginner",
      time: "12 mins",
      button2: "Sample Question",
      level:"Entry level"
    },
    {
      title: "Accountancy",
      button1: "beginner",
      time: "30 mins",
      button2: "Sample Question",
      level:"Entry level"
    },
    {
      title: "Accounting level 1",
      button1: "beginner",
      time: "45 mins",
      button2: "Sample Question",
      level:"Entry level"
    },
    {
      title: "Agile ways of working L1",
      button1: "beginner",
      time: "12 mins",
      button2: "Sample Question",
      level:"Entry level"
    },
    {
      title: "Basic to beginner changewww",
      button1: "beginner",
      time: "12 mins",
      button2: "Sample Question",
      level:"Entry level"
    },
    {
      title: "cropped images checking",
      button1: "beginner",
      time: "12 mins",
      button2: "Sample Question",
      level:"Entry level"
    },
  ]
  const filteredCards = cardsData.filter((card) => {
    return selectedLevel === "All Level" || card.level === selectedLevel;
  });

  return (
    <>
      <Header />
      <div>
        <div className="px-4 flex bg-[#F6F7F7] mt-6 justify-between pt-6 pb-8 items-center">
          <h1 className="text-2xl font-bold px-4">
            <FontAwesomeIcon className="mr-2 text-2xl" icon={faCircleCheck} />
            Modules
          </h1>
          <div className="flex px-4">
            <div className="relative ">
              <input
                className="bg-white p-2 px-4 border-2 border-black rounded-md text-xl"
                type="text"
                placeholder="Search module here..."

              />
              <FontAwesomeIcon icon={faMagnifyingGlass}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 px-2" />
            </div>
            <div>
              <button className="p-2 px-4 bg-[#C0FF06] ml-4 text-xl border-2  border-black rounded-md">
                <FontAwesomeIcon className="mr-2" icon={faFileLines} />
                Create new test
              </button>
            </div>
          </div>

        </div>

        <div className="w-full flex gap-6 p-6 bg-[#F6F7F7]">
          <div className="w-1/4 bg-white p-6">
            <div className="flex justify-between items-center px-4">
              <h1 className="text-xl mb-6 font-bold">Experience Level</h1>
              <FontAwesomeIcon className="text-xl mb-6" icon={faSquareCaretUp} />
            </div>
            <div className="grid grid-flow-col grid-rows-2 gap-4 mt-4 p-4">
              <button  onClick={() => setSelectedLevel("Entry Level")} className="bg-[#F6F7F7] p-4 rounded-xl hover:bg-[#F6F7F7]/90 text-xl">Entry Level</button>
              <button onClick={() => setSelectedLevel("Mid Level")} className="bg-[#F6F7F7] p-4 rounded-xl hover:bg-[#F6F7F7]/90 text-xl ">Mid Level</button>
              <button onClick={()=> setSelectedLevel("Senior Level")} className="bg-[#F6F7F7] p-4 rounded-xl hover:bg-[#F6F7F7]/90 text-xl">Senior Level</button>
              <button onClick={() => setSelectedLevel("All Level")} className="bg-[#F6F7F7] p-4 rounded-xl hover:bg-[#F6F7F7]/90 text-xl">All Level</button>
            </div>
            <hr />
            <div className="flex justify-between items-center px-4 mt-4">
              <h1 className="text-xl mb-6 font-bold">Industry</h1>
              <FontAwesomeIcon className="text-2xl mb-6" icon={faSquareCaretUp} />
            </div>
            <div className="relative px-4">
              <input
                className="bg-white p-2 pr-10 border-2 border-black rounded-md text-xl w-full"
                type="text"
                placeholder="Search industry here..."
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>

            <div className="px-6">
              <ul className="text-xl p-4">
                <li><input type="checkbox" className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 rounded-sm" />Accountancy</li>
                <li><input type="checkbox" className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 rounded-sm" />Banking</li>
                <li><input type="checkbox" className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 rounded-sm" />Corporate Finance</li>
                <li><input type="checkbox" className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 rounded-sm" />Dexta Launch Industry 1</li>
                <li><input type="checkbox" className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 rounded-sm" />Farzan Code</li>
                <li><input type="checkbox" className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 rounded-sm" />Farzan Meta</li>
                <li><input type="checkbox" className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 rounded-sm" />Hedge Funds</li>
                <li><input type="checkbox" className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 rounded-sm" />Investment Banking</li>
              </ul>
            </div>
          </div>

          <div className="w-3/4 bg-white p-6">
            <div>
              <h1 className="px-4 text-2xl">28 Modules in English</h1>
            </div>
            <div className="grid grid-flow-col grid-rows-2 gap-6 mt-4 px-6">
              {filteredCards.length > 0 &&
                filteredCards.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    button1={card.button1}
                    time={card.time}
                    button2={card.button2}
                  />
                ))}
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Dashboard;
