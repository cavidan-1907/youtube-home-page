
import React from 'react';
import { Youtube, List } from 'react-bootstrap-icons';
import Comp from './comp';
import ProfileImage from '../file.jpeg';
import { BiLogoYoutube } from 'react-icons/bi';
const Navbar = () => {
  return (
    <nav className='border-r border-r-gray-200 flex flex-col w-[15%] max-h-screen   gap-6 overflow-x-auto p-[32px]'>

      <div className='flex items-center gap-2 cursor-pointer transition-all delay-100'>
        <List className='text-[30px] text-gray-500 hover:text-gray-900' />
        <Youtube className='text-[30px] text-youtube hover:text-red-700' />
        <span className='text-[22px] font-semibold'>YouTube</span>
      </div>

      <div className='border-b border-t-gray-200'>
        <Comp text='Home' icon='home' />
        <Comp text='Shorts' icon='shorts' />
        <Comp text='Subscribe' icon='subscribe' />
      </div>

      <div className='border-b border-t-gray-200 flex items-center gap-4'>
        <img src={ProfileImage} alt='Profile' className='w-10 h-10 rounded-full' />
        <div className='flex flex-col'>
          <span className='text-sm font-medium'>John Doe</span>
          <span className='text-gray-400 text-xs'>Your Channel</span>
        </div>
      </div>
      <div className='border-b border-t-gray-200'>
        <span className='flex items-center gap-2 text-gray-500'>
          Siz 
        </span>
        <Comp text='Your Channel' icon='channel' />
        <Comp text='Playlists' icon='playlist' />
        <Comp text='Your Videos' icon='video' />
        <Comp text='Liked Videos' icon='likes' />
        <Comp text='Watch Later' icon='watch-later' />
      </div>
      <div className='border-b border-t-gray-200 flex flex-col gap-[20px]'>
        <span className='flex items-center gap-2 text-gray-500'>
          Subscribe
        </span>

        <div className='flex items-center cursor-pointer hover:bg-gray-900 gap-[20px]'>
        <img src={ProfileImage} alt='Profile' className='w-10 h-10 rounded-full' />
          <span className='text-sm font-medium'>Djavidan</span>
      </div>
      <div className='flex items-center cursor-pointer hover:bg-gray-900 gap-[20px]'>
        <img src={ProfileImage} alt='Profile' className='w-10 h-10 rounded-full' />
          <span className='text-sm font-medium'>Djavidan</span>
      </div>

      <div className='flex items-center cursor-pointer hover:bg-gray-900 gap-[20px]'>
        <img src={ProfileImage} alt='Profile' className='w-10 h-10 rounded-full' />
          <span className='text-sm font-medium'>Djavidan</span>
      </div>
      <div className='flex items-center cursor-pointer hover:bg-gray-900 gap-[20px]'>
        <img src={ProfileImage} alt='Profile' className='w-10 h-10 rounded-full' />
          <span className='text-sm font-medium'>Djavidan</span>
      </div>
      <div className='flex items-center cursor-pointer hover:bg-gray-900 gap-[20px]'>
        <img src={ProfileImage} alt='Profile' className='w-10 h-10 rounded-full' />
          <span className='text-sm font-medium'>Djavidan</span>
      </div>
      <div className='flex items-center cursor-pointer hover:bg-gray-900 gap-[20px]'>
        <img src={ProfileImage} alt='Profile' className='w-10 h-10 rounded-full' />
          <span className='text-sm font-medium'>Djavidan</span>
      </div>
      <div className='flex items-center cursor-pointer hover:bg-gray-900 gap-[20px]'>
        <img src={ProfileImage} alt='Profile' className='w-10 h-10 rounded-full' />
          <span className='text-sm font-medium'>Djavidan</span>
      </div>
      
      </div>

      <div className='border-b border-t-gray-200'>
      <div className='flex items-center gap-2 cursor-pointer transition-all delay-100 hover:bg-gray-800 rounded-lg p-2'>
      <BiLogoYoutube className='text-[23px] text-youtube hover:bg-gray-900' />
      <span className='text-[14px] font-normal'>YouTube</span>
    </div>
    <div className='flex items-center gap-2 cursor-pointer transition-all delay-100 hover:bg-gray-800 rounded-lg p-2'>
      <BiLogoYoutube className='text-[23px] text-youtube hover:bg-gray-900' />
      <span className='text-[14px] font-normal'>YouTube</span>
    </div><div className='flex items-center gap-2 cursor-pointer transition-all delay-100 hover:bg-gray-800 rounded-lg p-2'>
      <BiLogoYoutube className='text-[23px] text-youtube hover:bg-gray-900' />
      <span className='text-[14px] font-normal'>YouTube</span>
    </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
