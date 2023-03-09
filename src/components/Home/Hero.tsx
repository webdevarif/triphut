import React from 'react';
import HeroBG from './hero-bg.jpg';
import HeroBanner from './hero-banner.svg';
import {VscArrowRight} from 'react-icons/vsc';
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="text-lg bg-[#FFFAF1] bg-[top_center] bg-no-repeat bg-cover xl:min-h-[915px] relative flex flex-column items-center py-[8rem]" style={{backgroundImage: `url(${HeroBG.src})` }}>
      <div className="container">

        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <h1 className="text-6xl leading-[1.2em] text-success mb-5">
              Free or Discounted
              <div className="font-bold text-black">Vacations anyone?</div>
            </h1>
            <div className="grid grid-cols-6 mb-14">
              <div className="col-span-5 text-xl">
              <p>TripHut is a Travel Club designed to send YOU on Free or Discounted Vacations using Community Resources.</p>
              </div>
            </div>

            {/* Join Button */}
            <div className="">
              <button className="btn btn-primary border border-2 text-white border-white bg-danger text-lg uppercase py-4 px-9 rounded-full h-[70px] flex gap-4 items-center justify-center tracking-[0.08em] shadow-[0px_43px_65px_rgba(255,108,44,0.29)]">
                Join The Club
                <VscArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

        <Image
          src={HeroBanner.src}
          alt="Picture of the author"
          width={HeroBanner.width}
          height={HeroBanner.height}
          className="absolute bottom-0 right-0 max-h-[85vh] w-auto"
        />
    </section>
  )
}

export default Hero