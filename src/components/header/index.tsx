import React, { useState } from 'react';
import Logo from './logo.svg';
import { FiChevronDown, FiChevronRight, FiX } from 'react-icons/fi';
import Image from 'next/image';
import {RiMenu5Fill} from 'react-icons/ri';
import Drawer from './Drawer';

const Header =() => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="absolute top-0 right-0 left-0 pt-6 pb-3 z-[9999]">
      <div className="container max-w-[1560px] mx-auto">
      <nav className="flex gap-x-5 items-center">
          
          {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo.src} alt="Logo" height={Logo.height} width={Logo.width} className="w-[50px] md:w-[85px] xl:w-[94px] h-auto 2xl:mr-[50px]" />
        </div>

        {/* Navigation Menu */}
        { NavMenu && <div className="navmenu hidden xl:block"><ul className="header-navmenu">
          { NavMenu.map((menuItem, i) =>(
          <li key={i} className={`header-navmenu-item ${menuItem.list ? 'has-submenu' : ''}`}>
            <a href={menuItem.path} className="header-navmenu-link">
              {menuItem.name}
              {menuItem.list && <span className="arrow"><FiChevronDown /></span>}
            </a>
            {menuItem.list &&
            <ul className='header-navmenu-submenu'>
              {menuItem.list.map((subItem, indx) =>(
              <li key={indx}><a className='leading-[1.3] block py-2 px-5 hover:bg-success text-black text-[16px] font-medium transition-all duration-150 ease-linear hover:text-white' href={subItem.path}>{subItem.name}</a></li>
              ))}
            </ul>
            }
          </li>          
            )) }
        </ul></div>
        }

        {/* Buttons Group */}
        <div className="ml-auto hidden xl:block">
          {/* Buttons Group */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-transparent hover:bg-success hover:text-white hover:border-success transition-all duration-150 text-black border border-2 border-[#6B6B6B] rounded-full text-[10px] md:text-[14px] xl:text-[15px] tracking-[0.08em] leading-[15px] md:leading-[22px] font-bold uppercase px-[14px] md:px-[18px] xl:px-[20px] py-[13px] h-[32px] md:h-[48px] flex gap-2 items-center">Connect Discord <FiChevronRight /></button>
            <button className="bg-success hover:bg-[#149B65] hover:border-[#149B65] shadow-[0px_19px_26px_rgba(0,175,124,0.17)] transition-all duration-150 text-white border border-2 border-success rounded-full text-[10px] md:text-[14px] xl:text-[15px] tracking-[0.08em] leading-[15px] md:leading-[22px] font-bold uppercase px-[14px] md:px-[18px] xl:px-[20px] py-[13px] h-[32px] md:h-[48px] flex gap-2 items-center">Connect Wallet <FiChevronRight /></button>
          </div>
        </div>

        <div className="header-toggler block ml-auto xl:hidden">
          <button onClick={() => setShowMenu(!showMenu)} className="hover:bg-white hover:text-success transition-all duration-150 ease-linear text-3xl h-[41px] sm:h-[56px] w-[41px] sm:w-[56px] flex items-center justify-center bg-success text-white rounded-full shadow-[0px_10px_30px_rgba(0,0,0,0.06)] sm:shadow-[0px_19px_26px_rgba(0,175,124,0.17)]">
            {!showMenu ? <RiMenu5Fill /> : <FiX />}
            </button>
        </div>
      </nav>

      </div>
      {/* Sidebar Drawer */}
      <section className={`sidebar-drawer ${showMenu ? 'active' : ''}`}>
        <Drawer/>
      </section>
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
