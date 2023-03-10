import React from 'react';
import {VscArrowRight} from 'react-icons/vsc';

const Hero = () => {
  
  return (
    <section className="text-lg bg-[bottom_center] bg-no-repeat bg-cover min-h-[735px] md:min-h-[915px] h-screen relative flex flex-col md:flex-row items-center py-[8rem] xl:bg-[url('/images/hero-bg-desktop.svg')] sm:bg-[url('/images/hero-bg-laptop.svg')] bg-[url('/images/hero-bg-mobile.svg')]" >
      <div className="container">

        <div className="grid grid-cols-5">
          <div className="col-span-5 md:col-span-3">
            <h1 className="text-[36px] md:text-[48px] xl:text-[70px] leading-[46px] md:leading-[55px] xl:leading-[82px] text-success mb-5">
              Free or Discounted
              <div className="font-bold text-black ">Vacations anyone?</div>
            </h1>
            <div className="grid grid-cols-6 mb-[25px] xl:mb-[50px]">
              <div className="col-span-5 text-[16px] md:text-[18px] xl:text-[20px] leading-[26px] md:leading-[30px] xl:leading-[34px]">
              <p>TripHut is a Travel Club designed to send YOU on Free or Discounted Vacations using Community Resources.</p>
              </div>
            </div>
            {/* Join Button */}
            <div>
              <button className="transition-all duration-150 ease-linear hover:bg-success hover:text-white hover:shadow-[0px_43px_65px_rgba(0,175,124,0.29)] border border-2 text-white border-white bg-danger text-[16px] xl:text-[20px] leading-[20px] xl:leading-[24px] uppercase py-[15px] px-[20px] md:py-[20px] md:px-[30px] xl:py-[25px] xl:px-[35px] rounded-full flex gap-4 items-center justify-center tracking-[0.08em] shadow-[0px_43px_65px_rgba(255,108,44,0.29)]">Join The Club <VscArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero