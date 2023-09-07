import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-12 pl-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <p className="mt-4">
              DreamDwell<br />
              HO,<br />
              Mumbai, Maharashtra, 400000<br />
              Phone: 69696969<br />
              Email: Dreamdwell@info.com
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-4">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/listings" className="text-gray-400 hover:text-white">Listings</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-xl font-semibold ml-5">Connect With Us</h4>
            <ul className="mt-4 flex space-x-4">
              <li><a href="https://www.instagram.com/francisfernandez11/" className="text-gray-400 hover:text-white "><img className='h-[70px] w-[70px] hover:scale-110 transition-duration-500' src="https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="Instagram" /></a></li>
              <li><a href="https://twitter.com/Francisxx12" className="text-gray-400 hover:text-white"><img className='h-[45px] w-[45px] mt-3 hover:scale-110' src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" alt="Twitter" /></a></li>
              <li><a href="https://github.com/francisz1011" className="text-gray-400 hover:text-white"><img className='h-[45px] w-[45px] mt-3 ml-2 hover:scale-110 rounded-lg' src="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg" alt="Github" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-6">
        <div className="container mx-auto">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} DreamDwell, Francis Fernandes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
