import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

const VideoCard = () => {
  const placeholderImage = 'https://img.youtube.com/vi/T2Y03sQqz8I/0.jpg'; 
  const videoTitle = 'Tailwind + React';
  const channelTitle = 'Film Sayti';
  const videoDuration = '12:34';

  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-900 relative group cursor-pointer'>
      <img
        className='w-full group-hover:opacity-70 transition-opacity duration-300'
        src={placeholderImage}
        alt='Sample Video'
      />
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <BsFillPlayFill className='text-white text-6xl' />
        <span className='absolute bottom-2 right-2 text-white text-sm'>{videoDuration}</span>
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 text-white'>{videoTitle}</div>
        <p className='text-gray-400 text-base'>{channelTitle}</p>
      </div>
      <div className='h-1 bg-gray-600'>
        <div className='h-full bg-red-600' style={{ width: '50%' }}></div>
      </div>
    </div>
  );
};

export default VideoCard;
