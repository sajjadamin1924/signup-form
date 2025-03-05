import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FaMicrosoft, FaRegFileAlt } from 'react-icons/fa';
import Header from '../Components/Header';
import { FaEye, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Mytests = () => {
  const [assessment, setAssessment] = useState('');
  const [search, setSearch] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleCreateNewTest = () => {
    navigate('/create-new-test'); 
  };

  const tableData = [
    {
      roleName: 'web',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: '2 hours ago',
      dateCreated: '6th February, 2025',
    },
    {
      roleName: 'web',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: 'a month ago',
      dateCreated: '6th February, 2025',
    },
    {
      roleName: 'premium tyu',
      candidates: 1,
      progress: { completed: '1', inProgress: '-', notCompleted: '-' },
      lastActivity: '17 hours ago',
      dateCreated: '4th February, 2025',
    },
    {
      roleName: 'react js',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: 'a month ago',
      dateCreated: '31st January, 2025',
    },
    {
      roleName: 'coomp',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: 'a month ago',
      dateCreated: '31st January, 2025',
    },
    {
      roleName: 'react js',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: 'a month ago',
      dateCreated: '30th January, 2025',
    },
    {
      roleName: 'react js',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: 'a month ago',
      dateCreated: '30th January, 2025',
    },
    {
      roleName: 'new book',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: 'a month ago',
      dateCreated: '30th January, 2025',
    },
    {
      roleName: 'react js',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: 'a month ago',
      dateCreated: '30th January, 2025',
    },
    {
      roleName: 'react',
      candidates: 0,
      progress: { completed: '-', inProgress: '-', notCompleted: '-' },
      lastActivity: '17 hours ago',
      dateCreated: '30th January, 2025',
    },
  ];

  return (
    <>
      <Header />
      <div className="mt-12 px-4 flex justify-between bg-[#F6F7F7] items-center">
        <div className="flex items-center justify-center">
          <FaMicrosoft className="mr-2" />My Tests
        </div>
        <div>
          <button onClick={handleCreateNewTest} className="flex items-center justify-center p-2 bg-[#C0FF06] hover:bg-[#252E3A] hover:text-white border-1 border-black rounded-md">
            <FaRegFileAlt className="mr-2" />Create new Test
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-4 px-4 bg-[#F6F7F7]">
        <div className="flex flex-col gap-3 mt-5 relative" id="assessment3" style={{ fontFamily: 'Silka' }}>
          <div className="relative mb-1" data-te-input-wrapper-init="true">
            <input
              type="text"
              className="peer block cursor-pointer user-select-none caret-transparent text-[13px] bg-white min-h-[auto] w-full border-[1px] rounded focus:border-coalColor pr-10 px-3 py-[11px] leading-[2.10] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-coalColor"
              id="assessment"
              value={assessment}
              onChange={(e) => setAssessment(e.target.value)}
              style={{ fontFamily: 'Silka' }}
            />
            <label
              htmlFor="assessment"
              className={`absolute left-3 pointer-events-none top-3 text-base transition-all duration-200 ease-out ${assessment ? '-translate-y-5' : ''} text-coalColor font-medium bg-[#F6F7F7] px-1`}
            >
              <span className="relative z-10">Active</span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-white"></span>
            </label>
            <div
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 cursor-pointer"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </div>

            {isDropdownVisible && (
              <div className="absolute top-[50px] left-0 right-0 bg-white border border-coalColor rounded-md mt-2 shadow-lg z-10">
                <ul className="p-2 text-sm">
                  <li className="p-2 hover:bg-[#252E3A] hover:text-white cursor-pointer">All</li>
                  <li className="p-2 hover:bg-[#252E3A] hover:text-white cursor-pointer">Active</li>
                  <li className="p-2 hover:bg-[#252E3A] hover:text-white cursor-pointer">Draft</li>
                  <li className="p-2 hover:bg-[#252E3A] hover:text-white cursor-pointer">Archived</li>
                  <li className="p-2 hover:bg-[#252E3A] hover:text-white cursor-pointer">Deactivated</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-5 w-[15rem] my-auto" id="assessment4">
          <div className="relative mb-1" data-te-input-wrapper-init="true">
            <input
              type="text"
              className="peer block undefined text-[12px] min-h-[auto] w-full border-[1px] rounded focus:border-coalColor bg-transparent pr-10 px-3 py-3 leading-[2.10] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-neutral-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ fontFamily: 'Silka' }}
            />
            <label
              htmlFor="search"
              className={`absolute left-3 pointer-events-none top-3 text-base transition-all duration-200 ease-out ${search ? '-translate-y-6' : ''} text-neutral-500`}
            >
              <span className="relative z-10">Search tests</span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-white"></span>
            </label>

            <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-4 bg-[#F6F7F7]">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Role Name</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Candidates</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">
                Progress
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <div>Completed</div>
                  <div>In Progress</div>
                  <div>Not Completed</div>
                </div>
              </th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Last Activity</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Date Created</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600 flex justify-between">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-[#F6F7F7]' : 'bg-white'}`}
              >
                <td className="py-3 px-6 text-sm text-gray-800">{row.roleName}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{row.candidates}</td>
                <td className="py-3 px-6 text-sm text-gray-800">
                  <div className="flex justify-between">
                    <div>{row.progress.completed || 'N/A'}</div>
                    <div>{row.progress.inProgress || 'N/A'}</div>
                    <div>{row.progress.notCompleted || 'N/A'}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-sm text-gray-800">{row.lastActivity}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{row.dateCreated}</td>
                <td className="py-3 px-6 text-sm text-gray-800 flex justify-between">
                  <FaEye className="cursor-pointer text-gray-600 hover:text-black" />
                  <FaTrash className="cursor-pointer text-gray-600 hover:text-black" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Mytests;
