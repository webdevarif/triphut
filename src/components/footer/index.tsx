import React, { useState, ReactNode } from 'react';
import Logo from './footer-logo.svg';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaPaperPlane, FaTwitter } from 'react-icons/fa';
import TravelRequest from '../TravelRequest';

interface Props {
  newsletter: boolean;
}


const Footer = ({ newsletter }: Props) => {
  return (
    <footer>
      { newsletter !== false ? <TravelRequest /> : null }

      {/* Footer Bottom */}
      <div className="bg-[#333132] text-[#BEBEBE] text-[16px] md:text-[15px] xl:text-[18px] pt-[13rem] pb-[3rem]">
        <div className="container">
          <div className="grid grid-cols-4 mb-[1.5rem] xl:mb-[6rem] gap-y-10 gap-x-2 xl:gap-4">

            <div className="col-span-4 sm:col-span-2 lg:col-span-1">
              {/* Footer Logo */}
              <div className="footer-logo">
                <Image
                  src={Logo.src}
                  alt="Picture of the author"
                  width={Logo.width}
                  height={Logo.height}
                  className="mb-4 inline-block w-[125px] md:w-[150px] xl:w-[180px] h-auto"
                />
              </div>
              <p className='text-[18px] xl:text-[22px]'>Travel Made Affordable</p>

            </div>

            <div className="col-span-4 sm:col-span-2 lg:col-span-1">
              <h4 className="text-white mb-7 text-[20px] xl:text-[22px] font-bold leading-6">Community</h4>
              {data && data.community && <ul className="list-unstyled flex flex-col gap-4">
                {data.community.map((item, i) =>(
                <li key={i}><a className='transition-all duration-300 hover:text-danger' href={item.path}>{item.name}</a></li>
                ))}
              </ul>}

            </div>

            <div className="col-span-4 sm:col-span-2 lg:col-span-1">
              <h4 className="text-white mb-7 text-[20px] xl:text-[22px] font-bold leading-6">Pages</h4>
                {data && data.pages && <ul className="list-unstyled flex flex-col gap-2">
                  {data.pages.map((item, i) =>(
                  <li key={i}><a className='text-[15px] xl:text-[18px] leading-6 xl:leading-10 transition-all duration-300 hover:text-danger' href={item.path}>{item.name}</a></li>
                  ))}
                </ul>}

            </div>

            {/* Contact Info */}
            <div className="col-span-4 sm:col-span-2 lg:col-span-1">
              <h4 className="text-white mb-7 text-[20px] xl:text-[22px] font-bold leading-6">Connect with Us</h4>

              <div className='flex gap-2 items-center mb-4'>
                <FaEnvelope className='text-[#59C0B1]'/>
                <span>triphut_by@yaadlabs.io</span>
              </div>

              {data && data.socialList && <ul className='list-unstyled flex gap-3'>{ data.socialList.map((item, i) =>(
                <a key={i} href={item.path} className='border border-2 h-[36px] w-[36px] xl:h-[41px] xl:w-[41px] rounded-full text-sm xl:text-base flex items-center justify-center border-[rgba(240,240,240,0.57)] hover:bg-danger hover:text-white hover:border-danger hover:shadow-[0px_11px_20px_rgba(255,108,44,0.3)] transition duration-150 ease-out' target="_blank" rel="noreferrer">{item.icon}</a>
              ))}</ul> }
              
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">

              {/* Buttons Group */}
            <div className="flex flex-wrap gap-4">

              <button className="bg-success hover:bg-[#149B65] transition-all duration-150 text-white rounded-full text-[10px] md:text-[14px] xl:text-[15px] tracking-[0.08em] leading-[15px] md:leading-[22px] font-bold uppercase px-[14px] md:px-[18px] xl:px-[20px] py-[13px] h-[32px] md:h-[48px] flex gap-2 items-center">Connect Discord <FiChevronRight /></button>
              <button className="bg-warning hover:bg-danger text-black hover:text-white transition-all duration-150 rounded-full text-[10px] md:text-[14px] xl:text-[15px] tracking-[0.08em] leading-[15px] md:leading-[22px] font-bold uppercase px-[14px] md:px-[18px] xl:px-[20px] py-[13px] h-[32px] md:h-[48px] flex gap-2 items-center">connect wallet <FiChevronRight /></button>

            </div>
              {/* Copyright Content */}
              <div className="text-[16px] xl:text-[18px] leading-6 xl:leading-8">
              <p>© Copyright 2022 by TripHut Limited. <br />All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

const data = {


  community : [
    {
      name : "Become a Member",
      path: 'become-a-member'
    },
    {
      name : "Submit a Travel Request",
      path: 'submit-a-travel-request'
    },
    {
      name : "Submit a Proposal",
      path: 'submit-a-proposal'
    },
    {
      name : "Vote",
      path: 'vote'
    },
  ],
  

  pages : [
    {
      name : "Travel Club Benefits",
      path: 'travel-club-benifits'
    },
    {
      name : "Resources",
      path: 'resources'
    },
    {
      name : "FAQs",
      path: 'faqs'
    },
    {
      name : "Privacy Policy",
      path: 'privacy-policy'
    },
    {
      name : "Terms of Use & Copyright",
      path: 'terms-of-use-copyright'
    },
  ],
  

  socialList : [
    {
      icon : <FaInstagram />,
      path: 'instagram'
    },
    {
      icon : <FaTwitter />,
      path: 'twitter'
    },
    {
      icon : <FaPaperPlane />,
      path: 'paper-plan'
    },
    {
      icon : <FaLinkedinIn />,
      path: 'linkedin-in'
    },
  ]
  
}

export default Footer;
