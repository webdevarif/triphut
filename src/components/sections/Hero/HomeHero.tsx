import React from 'react';
import { Header } from '../..';
import Buttons from '../../buttons';
import Image from 'next/image';
import HeroBanner from './hero-banner.svg';

function HeroHeader() {
  return (
    <div className='bg-hero-pattern hero-header hero-bg h-screen bg-cover bg-center'>
      <Header />
      <div className='container-fluid hero-header-body add-padding flex h-full w-full items-center'>
        <div className='group'>
          <h1 className='hero-heading'>
            Free or Discounted
            <br />
            <span>Vacations anyone?</span>
          </h1>
          <p className='text-md mb-12 max-w-md text-black'>
            TripHut is a Travel Club designed to send YOU on Free or Discounted
            Vacations using Community Resources.
          </p>
          <Buttons
            icon={true}
            type='btn--accent'
            link='https://www.jpg.store/'
            text='Join the Club'
          />
        </div>
        <Image
          width='300'
          height='300'
          alt='Hero Image'
          src={HeroBanner.src}
        />
      </div>
    </div>
  );
}

export default HeroHeader;
