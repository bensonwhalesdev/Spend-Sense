import React, { useState } from 'react';
import Button from '../Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    console.log('hello world');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1C1F58] shadow-lg">
      <nav className="w-[90%] mx-auto p-4 md:p-3 flex justify-between items-center">
        <div>
          <img className="w-12 md:h-14 md:w-14 rounded-2xl object-cover" src="/logo.jpg" alt="logo" />
        </div>

        <ul className="hidden md:flex gap-6 lg:gap-8 list-none">
          <li className="font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer">Why Spend-Sense</li>
          <li className="font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer">What You Get</li>
          <li className="font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer">Contact Us</li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <Button text="Login" classStyle="px-5 py-2 rounded-[10px] bg-white text-black font-semibold hover:bg-gray-200 transition-colors" onClick={handleClick} />
          <Button text="Start your Free Trial" classStyle="px-5 py-2 rounded-[10px] bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors" onClick={handleClick} />
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu" >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}/>
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1C1F58] w-[90%] mx-auto pb-4">
          <ul className="flex flex-col gap-4 list-none text-center">
            <li className="font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer">Why Spend-Sense</li>
            <li className="font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer">What You Get</li>
            <li className="font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer">Contact Us</li>
          </ul>

          <div className="flex flex-col gap-4 mt-4">
            <Button text="Login" classStyle="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors" onClick={handleClick}/>
            <Button text="Sign Up" classStyle="px-5 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors" onClick={handleClick} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;