import React from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className=" fixed w-full z-20 top-0 left-0 bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <div className="flex md:order-2">
          
        </div>
        <div className='h-[40px] w-[40px] ml-6 text-opacity-100'>
          <img className='h-[35px] w-[35px] ml-[240px] rounded-full' src='/assets/DreamD.png' alt='logo'/>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className=" text-2xl flex flex-col p-2 md:p-0 mt-2 font-medium border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent ">
            <li>
              <Link to="home"  spy={true} smooth={true} offset={0} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4  md:dark: text-white rounded-lg p-2 font-extrabold cursor-pointer md:p-0 md:dark:hover:text-amber-500  transition-opacity font-serif">DreamDwell</Link>
            </li>
            <li>
              <Link to="projects"  spy={true} smooth={true} offset={42} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-amber-500  dark:hover-bg-gray-700 dark:hover-text-white  dark:border-gray-700 cursor-pointer font-mono font-bold text-opacity-100 ">Homes</Link>
            </li>
            <li>
            <Link to="projects" spy={true} smooth={true} offset={42} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-amber-500  dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700 cursor-pointer font-mono font-bold">Offices</Link>
            </li>
            <li>
            <Link to="hospitality"  spy={true} smooth={true} offset={0} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-amber-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700 cursor-pointer font-mono font-bold">Hospitality</Link>
            </li>
            <li>
            <Link to="home"  spy={true} smooth={true} offset={0} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-amber-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700 cursor-pointer font-mono font-bold">NRI's</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
