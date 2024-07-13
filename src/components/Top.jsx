import React from 'react';
import { Search } from 'react-bootstrap-icons';
import { BiSpeaker, BiVideoPlus } from 'react-icons/bi';

const Top = () => {
  return (
    <div className='w-full'>
      <header className='p-4 gap-4 flex items-center justify-between'>

        <div className="left w-[20%]"></div>
        
     
        <div className="flex w-[40%]  items-center gap-2 relative">
          <input type="search" className='bg-transparent border border-gray-400 w-full p-2 pl-10 rounded-[22px]' placeholder="Search..." />
          <Search className="absolute right-2 top-2 text-gray-400" size={20} />
        </div>
        
    
        <div className="flex w-[10%] items-center gap-4">
        <BiSpeaker className='text-gray-400 cursor-pointer hover:text-gray-700' size={30} />
          <BiVideoPlus className='text-gray-400 cursor-pointer hover:text-gray-700' size={30} />
          

          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c1.657 0 3 1.343 3 3h-6c0-1.657 1.343-3 3-3zM12 21c-1.657 0-3-1.343-3-3h6c0 1.657-1.343 3-3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9a7 7 0 10-14 0 7 7 0 0014 0z" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Top;
