import React from 'react';

function Button() {
  return (
    <div>
      <div className="flex p-[20px] gap-[10px] items-start">
        <button className='border p-2 transition-all delay-100 rounded-[10px] hover:bg-cyan-50 hover:text-custom-dark'>Hamısı</button>
        <button className='border p-2 transition-all delay-100 rounded-[10px] hover:bg-cyan-50 hover:text-custom-dark'>Video</button>
        <button className='border p-2 transition-all delay-100 rounded-[10px] hover:bg-cyan-50 hover:text-custom-dark'>Kanal</button>
        <button className='border p-2 transition-all delay-100 rounded-[10px] hover:bg-cyan-50 hover:text-custom-dark'>Oyunlar</button>
        <button className='border p-2 transition-all delay-100 rounded-[10px] hover:bg-cyan-50 hover:text-custom-dark'>Xəbərər</button>
        <button className='border p-2 transition-all delay-100 rounded-[10px] hover:bg-cyan-50 hover:text-custom-dark'>Canlı</button>
        <button className='border p-2 transition-all delay-100 rounded-[10px] hover:bg-cyan-50 hover:text-custom-dark'>360°</button>
      </div>
    </div>
  );
}

export default Button;
