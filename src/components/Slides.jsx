import React from 'react'
import Carousel from './Carousel'
import projectsVideo1 from '/assets/projectsVideo1.mp4';
import projectsVideo2 from '/assets/projectsVideo2.mp4';
import projectsVideo3 from '/assets/projectsVideo3.mp4';
import projectsVideo4 from '/assets/projectsVideo4.mp4';


const videos = [
    {
      src: projectsVideo1,
    },
    {
      src: projectsVideo2,
    },
    {
      src: projectsVideo3,
    },
    {
      src: projectsVideo4,
    },
  ];

const Slides = () => {
  return (
    <div id='projects' className='max-w-7xl'>
      <h1 className='text-center text-4xl font-serif bg-gray-700 text-white'> 
      CURRENT PROJECTS
      </h1>
<Carousel autoSlide={true}>
{videos.map((s, index) => (
    <video key={index} autoPlay muted loop >
    <source src={s.src} type="video/mp4" />
    </video>
))}
</Carousel>
    </div>
  )
}

export default Slides;