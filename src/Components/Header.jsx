import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons/faSquareCaretDown";


const Header = () => {
  return (
    <header className="flex px-4 justify-between items-center">
      <div className="flex">
        <img src="dashboard.jpg" alt="logo" />
        <h1 className="text-5xl font-extrabold relative">Dexta</h1>
        <p className="absolute top-9 left-24">data-led-hiring</p>
      </div>
      <div className="flex">
  <nav>
    <ul className="flex justify-between w-full">
      <li className="px-4"><FontAwesomeIcon icon= {faMicrosoft} />My Tests</li>
      <li className="px-4"> <FontAwesomeIcon icon={faUser} />My Candidates</li>
      <li className="px-4"><FontAwesomeIcon icon={faCircleCheck} />Modules</li>
    </ul>
  </nav>
</div>

<div className=" flex justify-center items-center ">
  <FontAwesomeIcon
    className="rounded-full border-2 border-gray-500 p-2 w-4 h-4 mr-6"
    icon={faQuestion}
  />
  <div className="rounded-full border-2 border-gray-500 p-2 w-12 h-12 flex items-center justify-center ml-2">
  <p className="text-center px-4">sa</p>
  
</div>
<h4 className="px-2">Hello Nabeel</h4>
<FontAwesomeIcon className="ml-1" icon={faSquareCaretDown} />

</div>


    </header>
  );
};

export default Header;
