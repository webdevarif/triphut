import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import BG from './bg.svg';

const TravelRequest =()=> {
  
  return (
    <section className='travel-request pt-[7rem] -mb-[9rem] z-[2] relative'>
      
      <div className="container">

        <div className="shadow-[0px_-14px_42px_-8px_rgba(7,20,60,0.22)] py-[45px] md:py-[65px] xl:py-[90px] bg-success text-white px-[35px] lg:px-[50px] rounded-xl md:rounded-[32px] gap-4 justify-between flex flex-col md:flex-row md:items-center gap-6 bg-cover bg-[left_center] md:bg-[right_center]" style={{ 
          backgroundImage: `url(${BG.src})`
        }}>
          <div>
            <h1 className='text-[36px] md:text-[40px] xl:text-[55px] font-semibold leading-[46px] md:leading-[50px] xl:leading-[61px]'>Submit a <br />Travel Request</h1>
          </div>
          <div>
            <button className="bg-white text-black rounded-full text-[18px] xl:text-[20px] tracking-[0.08em] font-semibold uppercase px-[18px] md:px-[35px] xl:px-[60px] py-[15px] md:py-[20px] xl:py-[25px] h-[50px] md:h-[60px] xl:h-[70px] flex gap-1 items-center transition-all duration-300 hover:bg-warning">Get started<FiChevronRight /></button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default TravelRequest;
