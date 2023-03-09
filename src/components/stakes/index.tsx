import React, { useState } from 'react';
import { FiChevronDown, FiHeart } from 'react-icons/fi';
import {HiArrowLongRight} from 'react-icons/hi2';
import Image from 'next/image';
import thumb from './thumb.jpg';
import User1 from './user-1.png';
import User2 from './user-2.png';
import Currency from './ETH.svg';

const StakeSection = () => {
  const list =[
    {
      thumbnail: thumb,
      title: 'Abstract Cube #2000',
      likes: [
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
      ],
    },
    {
      thumbnail: thumb,
      title: 'Abstract Cube #2000',
      likes: [
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
      ],
    },
    {
      thumbnail: thumb,
      title: 'Abstract Cube #2000',
      likes: [
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
      ],
    },
    {
      thumbnail: thumb,
      title: 'Abstract Cube #2000',
      likes: [
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
      ],
    },
    {
      thumbnail: thumb,
      title: 'Abstract Cube #2000',
      likes: [
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
      ],
    },
    {
      thumbnail: thumb,
      title: 'Abstract Cube #2000',
      likes: [
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
      ],
    },
    {
      thumbnail: thumb,
      title: 'Abstract Cube #2000',
      likes: [
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
      ],
    },
    {
      thumbnail: thumb,
      title: 'Abstract Cube #2000',
      likes: [
        {
          picture: User1,
          name: "User 1"
        },
        {
          picture: User2,
          name: "User 2"
        },
      ],
    },
  ]
  return (
    <section className='pt-[80px]'>
      <div className="container">

          <div className="grid grid-cols-12 gap-6 items-center text-center md:text-left mb-[50px]">
            <div className='col-span-12 md:col-span-7 xl:col-span-8'>
              <h2 className='text-[30px] md:text-[40px] xl:text-[55px] leading-[40px] md:leading-[50px] xl:leading-[68px] text-black font-medium'>Stake Your NFT & Earn <br className='hidden md:block'/>Points to Claim Rewards</h2>
            </div>
            <div className='col-span-12 md:col-span-5 xl:col-span-4 text-center md:text-right'>
              <button className="shadow-[0px_43px_65px_rgba(255,108,44,0.29)] bg-danger text-white hover:bg-success transition-all duration-150 ease-in-out inline-flex gap-2 items-center text-[18px] font-semibold uppercase border border-white border-[2.5px] py-[14px] md:py-[19px] tracking-[0.08em] px-[32px] rounded-full h-[50px] md:h-[60px]">Stake NFT <HiArrowLongRight /> </button>
            </div>
          </div>

        {list && <div className="grid grid-cols-12 gap-[20px] gap-[18px] xl:gap-[33px]">
          {list.map((item, i) =>(
            <div key={i} className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col gap-[20px] border border-[2px] border-[#E6ECF5] rounded-[12px] p-[10px] shadow-[0px_30px_50px_rgba(0,0,0,0.08);]">
              {/* Thumb Area */}
              <div className="thumb-area">
                <Image src={item.thumbnail.src} alt={item.title} width={item.thumbnail.width} height={item.thumbnail.height} className='w-full h-auto rounded-[10px]'/>
              </div>
              <div>
              {/* Content Area */}
              <div className="content-area">
                <div className="flex justify-between items-center mb-[20px]">
                  {/* Thumbs */}
                  {item.likes && <ul className="flex">
                    {item.likes.slice(0, 3).map((user, index) => (
                      <li key={index} className={index > 0 ? "-ml-[11px]" : ""}>
                        <Image src={user.picture.src} alt={user.name} width={33} height={33} />
                      </li>
                    ))}                
                  </ul>}

                  <div className="inline-flex gap-1 items-center text-[#6B6B6B] text-[18px] text-normal">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.465 15.5325C9.21 15.6225 8.79 15.6225 8.535 15.5325C6.36 14.79 1.5 11.6925 1.5 6.4425C1.5 4.125 3.3675 2.25 5.67 2.25C7.035 2.25 8.2425 2.91 9 3.93C9.7575 2.91 10.9725 2.25 12.33 2.25C14.6325 2.25 16.5 4.125 16.5 6.4425C16.5 11.6925 11.64 14.79 9.465 15.5325Z" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{item.likes.length}</span>
                  </div>
                </div>
                
                <div className='mb-[15px]'>
                  <a href="#"><h2 className='mb-0 text-[20px] xl:text-[24px] text-black font-medium leading-[26px] md:leading-[24px]'>{item.title}</h2></a>
                </div>
                
                <div className="flex mb-[25px] gap-2 text-[16px] leading-[26px]">
                  <Image src={Currency.src} width={Currency.width} height={Currency.height} alt="ETH" />
                  <a href="#" className='text-[#59C0B1]'>27.5 ETH</a>
                  <span>1/1</span>
                </div>

                <button className='hover:bg-success hover:text-white hover:border-success transition-all duration-150 w-full ease-linear border border-[#B1B5C3] rounded-full h-[48px] py-[13px] px-4 justify-center flex items-center gap-2 uppercase font-semibold text-black text-[18px] leading-[22px]'>Stake Now <HiArrowLongRight /></button>

              </div>
            </div>
              {/* Icon Area */}
            </div>
          ))}
        </div>
        }

        <div className="text-center mt-[30px]">
          <div className="text-black text-[18px]">*Your NFT never actually leaves your wallet.</div>
        </div>
      </div>
    </section>
  );
}

export default StakeSection;
