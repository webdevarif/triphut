import React from 'react';
import img1 from '../../assets/images/star-icon.svg';
import Image from 'next/image';
import { Buttons } from '../index';
function PartnersSection() {
  return (
    <div className='benefits-section'>
      <div className='mb-20 grid grid-cols-1 gap-4 md:grid-cols-4'>
        <div className='col-span-3'>
          <h3 className='content-title'>
            Save at least 12% on vacations through TripHut!
          </h3>
        </div>
        <div className='flex items-center justify-end'>
          <div>
            <Buttons type='btn--accent' icon={true} text='Join The Club' />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div className='card blurb-card'>
          <div className='icon-container icon-2'>
            <Image
              src={img1.src}
              alt='partner'
              width={183}
              height={134}
              className='object-contain'
            />
          </div>
          <p className='blurb-title text-center'>Travel Grants</p>
        </div>
        <div className='card blurb-card'>
          <div className='icon-container icon-1'>
            <Image
              src={img1.src}
              alt='partner'
              width={183}
              height={134}
              className='object-contain'
            />
          </div>
          <p className='blurb-title text-center'>
            Free or Discounted Accommodation at Community Owned Properties
          </p>
        </div>
        <div className='card blurb-card'>
          <div className='icon-container icon-3'>
            <Image
              src={img1.src}
              alt='partner'
              width={183}
              height={134}
              className='object-contain'
            />
          </div>
          <p className='blurb-title text-center'>
            Discounted Experiences at Partner Locations
          </p>
        </div>
        <div className='card blurb-card'>
          <div className='icon-container icon-2'>
            <Image
              src={img1.src}
              alt='partner'
              width={183}
              height={134}
              className='object-contain'
            />
          </div>
          <p className='blurb-title text-center'>Travel Grants</p>
        </div>
        <div className='card blurb-card'>
          <div className='icon-container icon-1'>
            <Image
              src={img1.src}
              alt='partner'
              width={183}
              height={134}
              className='object-contain'
            />
          </div>
          <p className='blurb-title text-center'>Member Rewards</p>
        </div>
        <div className='card blurb-card'>
          <div className='icon-container icon-2'>
            <Image
              src={img1.src}
              alt='partner'
              width={183}
              height={134}
              className='object-contain'
            />
          </div>
          <p className='blurb-title text-center'>
            Exclusive Content, Access & Benefits
          </p>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
