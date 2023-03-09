import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {HiArrowLongRight} from 'react-icons/hi2';
import Logo1 from './1.svg';
import Logo2 from './2.svg';
import Logo3 from './3.svg';
import Logo4 from './4.svg';
import Logo5 from './5.svg';
import Logo6 from './6.svg';
import Image from 'next/image';

const BenefitsSection = () => {
  const list =[
    {
      icon: Logo1,
      title: 'Travel Grants',
      shadow: '0px 25px 30px rgba(4, 149, 95, 0.25);'
    },
    {
      icon: Logo2,
      title: 'Free or Discounted Accommodation at Community Owned Properties',
      shadow: '0px 25px 30px rgba(150, 193, 33, 0.26)'
    },
    {
      icon: Logo3,
      title: 'Discounted Experiences at Partner Locations',
      shadow: '0px 25px 30px rgba(254, 218, 126, 0.22);'
    },
    {
      icon: Logo4,
      title: 'Member Rewards',
      shadow: '0px 25px 30px rgba(244, 127, 58, 0.23)'
    },
    {
      icon: Logo5,
      title: 'Exclusive Content, Access & Benefits',
      shadow: '0px 25px 30px rgba(0, 175, 124, 0.19)'
    },
    {
      icon: Logo6,
      title: 'Governance Rights Over Community Owned Assets',
      shadow: '0px 25px 30px rgba(227, 79, 48, 0.23)'
    },
  ]
  return (
    <section className='pt-[80px]'>
      <div className="container">

          <div className="grid grid-cols-12 gap-6 items-center text-center md:text-left mb-[80px]">
            <div className='col-span-12 md:col-span-7 xl:col-span-8'>
              <h2 className='text-[30px] md:text-[40px] xl:text-[55px] leading-[40px] md:leading-[50px] xl:leading-[68px] text-black font-medium'>Save at least 12% on vacations through TripHut!</h2>
            </div>
            <div className='col-span-12 md:col-span-5 xl:col-span-4 text-center md:text-right'>
              <button className="shadow-[0px_43px_65px_rgba(255,108,44,0.29)] bg-danger text-white hover:bg-success transition-all duration-150 ease-in-out inline-flex gap-2 items-center text-[18px] font-semibold uppercase border border-white border-[2.5px] py-[14px] md:py-[19px] tracking-[0.08em] px-[32px] rounded-full h-[50px] md:h-[60px]">Join The Club <HiArrowLongRight /> </button>
            </div>
          </div>

        {list && <div className="grid grid-cols-12 gap-[30px] gap-[26px] xl:gap-[60px]">
          {list.map((item, i) =>(
            <div key={i} className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-[35px] xl:gap-[40px] border border-[#E6ECF5] pt-[40px] md:pt-[60px] pb-[30px] px-[30px] md:px-[35px] xl:px-[50px] rounded-[24px] text-center">
              {/* Icon Area */}
              <div className="icon-area">
                <Image src={item.icon.src} alt={item.title} width={item.icon.width} height={item.icon.height} className='inline-block w-[88px] md:w-[112px] h-auto rounded-[34px]' style={{
                  boxShadow: `${item.shadow}`
                }}/>
              </div>
              <div>
                <h2 className='text-[24px] xl:text-[30px] text-black font-medium leading-[34px] md:leading-[32px] xl:leading-[37px]'>{item.title}</h2>
              </div>
              {/* Icon Area */}
            </div>
          ))}
        </div>
        }

        <div className="text-center mt-[30px]">
          <a href="#" className="text-black text-[18px]">*Conditions Apply</a>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
