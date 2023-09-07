import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'



const Carousel = ({ children: videos, autoSlide = false, autoSlideInterval = 5000, }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? videos.length - 1 : curr - 1))

  const next = () => setCurr((curr) => (curr === videos.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500 ' style={{ transform: `translateX(-${curr * 100}%)` }}>{videos}</div>
      <div className='absolute inset-0 flex items-center justify-between p-[50px]'>
        <button onClick={prev} className='rounded-full bg-white opacity-50 text-gray-800 hover:bg-white'>
          <HiChevronLeft size={60} />
        </button>
        <button onClick={next} className='rounded-full bg-white opacity-50 text-gray-800 hover:bg-white'>
          <HiChevronRight size={60} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
