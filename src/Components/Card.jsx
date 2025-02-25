import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const Card = ({ title, time, button1, button2 }) => {
  return (
    <div>
      <div className="card bg-[#F6F7F7] px-4 p-4">
        <div className="flex justify-between" >
          <div>
            <h1 className='text-sm font-bold'>{title}</h1>
          </div>
          <div>
            <button className=" flex px-4 text-lg border-2 border-gray-600 rounded-2xl cursor-pointer items-center justify-center">{button1}</button>
          </div>
        </div>
        <div>
          <h1 className="mt-8"> <FontAwesomeIcon className="mr-2" icon={faClock} />
            {time}</h1>
        </div>
        <div>
          <button className="bg-[#252E3A] text-white items-center w-full p-2 text-md rounded-xl mb-2 mt-20 hover:bg-[#252E3A]/90 cursor-pointer">{button2}</button>
        </div>



      </div>
    </div>
  )
}

export default Card;
