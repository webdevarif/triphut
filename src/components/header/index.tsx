import React from 'react';
import dynamic from 'next/dynamic';
import Logo from './logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Header =() => {
  return (
    <header className="absolute top-0 right-0 left-0 pt-6 pb-3">
      <div className="container max-w-[1560px] mx-auto">
      <nav className="flex gap-x-5 items-center">
          
          {/* Logo */}
        <div className="flex items-center">
          <img src={Logo.src} alt="Logo" className="w-[50px] md:w-[85px] xl:w-[94px] h-auto" />
        </div>

        {/* Navigation Menu */}
        { NavMenu && <ul className="hidden md:flex">
          { NavMenu.map((menuItem, i) =>(
          <li key={i}>
            <a href="#"
              className="" >
              {menuItem.name}
            </a>
          </li>          
            )) }
        </ul>
        }

        {/* Buttons Group */}
        <div className="ml-auto">
          {/* Buttons Group */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-transparent hover:bg-success hover:text-white hover:border-success transition-all duration-150 text-black border border-2 border-[#6B6B6B] rounded-full text-[10px] md:text-[14px] xl:text-[15px] tracking-[0.08em] leading-[15px] md:leading-[22px] font-bold uppercase px-[14px] md:px-[18px] xl:px-[20px] py-[13px] h-[32px] md:h-[48px] flex gap-2 items-center">Connect Discord <FiChevronRight /></button>
            <button className="bg-success hover:bg-[#149B65] hover:border-[#149B65] shadow-[0px_19px_26px_rgba(0,175,124,0.17)] transition-all duration-150 text-white border border-2 border-success rounded-full text-[10px] md:text-[14px] xl:text-[15px] tracking-[0.08em] leading-[15px] md:leading-[22px] font-bold uppercase px-[14px] md:px-[18px] xl:px-[20px] py-[13px] h-[32px] md:h-[48px] flex gap-2 items-center">Connect Wallet <FiChevronRight /></button>
          </div>
        </div>

      </nav>

      </div>
    </header>
  );
}

const NavMenu = [
  { 
    name : 'Community',
    path : 'community',
    list: [
      {
        name: "Sub Community",
        path: "sub-community",
      },
      {
        name: "Sub Community",
        path: "sub-community",
      },
      {
        name: "Sub Community",
        path: "sub-community",
      },
      {
        name: "Sub Community",
        path: "sub-community",
      },
    ]
  },
  { 
    name : 'Travel Club Benefits',
    path : 'travel-club-benifits',
  },
  { 
    name : 'Resouces',
    path : 'resources',
  },
  { 
    name : 'FAQs',
    path : 'faqs',
  },
]
export default Header;
