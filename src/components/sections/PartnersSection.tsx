import React from 'react';
import Image from 'next/image';

function PartnersSection() {
  return (
    <div className='partners-section section'>
      <div className='container'>
        <h2 className='section-title'>
          <span>Our</span> Partners
        </h2>
        <div
          className={`mt-12 grid grid-cols-1 gap-4 md:grid-cols-${partners.length}`}
        >
          {partners.map((image, i) => {
            return (
              <div key={i} className='img flex justify-center'>
                <Image
                  src={image}
                  alt='partner'
                  width={183}
                  height={134}
                  className='object-contain'
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;

const partners = [
  '/images/project_catalyst.png',
  '/images/yaadlabs_with_tagline.png',
  '/images/tipsy_turtles_word.png',
  '/images/animints.png',
];
