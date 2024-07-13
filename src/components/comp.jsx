// Comp.jsx
import React from 'react';
import { BiHome, BiCameraMovie, BiUser, BiPlay, BiLike, BiHourglass, BiChevronRight } from 'react-icons/bi';

const Comp = ({ text, icon }) => {
  let IconComponent = BiHome; // Varsayılan ikon

  switch (icon) {
    case 'home':
      IconComponent = BiHome;
      break;
    case 'shorts':
      IconComponent = BiCameraMovie;
      break;
    case 'subscribe':
      IconComponent = BiUser;
      break;
    case 'channel':
      IconComponent = BiUser;
      break;
    case 'playlist':
      IconComponent = BiPlay;
      break;
    case 'video':
      IconComponent = BiCameraMovie;
      break;
    case 'likes':
      IconComponent = BiLike;
      break;
    case 'watch-later':
      IconComponent = BiHourglass;
      break;
    case 'arrow-right':
      IconComponent = BiChevronRight;
      break;
    default:
      IconComponent = BiHome;
      break;
  }

  return (
    <div className='flex items-center gap-2 cursor-pointer transition-all delay-100 hover:bg-gray-800 rounded-lg p-2'>
      <IconComponent className='text-[23px] text-gray-500 hover:bg-gray-900' />
      <span className='text-[14px] font-normal'>{text}</span>
    </div>
  );
}

export default Comp;
