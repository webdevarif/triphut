import React from 'react';
import Buttons from '../buttons';
import bg from '../../assets/images/cta-bg.svg';
function FooterCTA() {
  const styles = {
    backgroundImage: `url("${bg.src}")`,
  };
  return (
    <div
      className='footerCTA w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between '
      style={styles}
    >
      {/* two column grid */}{' '}
      <div className='grid md:grid-cols-2'>
        {/* left column */}
        <div className='flex flex-col justify-center'>
          <h2 className='cta-title'>
            <span>Submit a</span>
            <span>Travel Request</span>
          </h2>
        </div>
        {/* right column */}
        <div className='flex items-center md:justify-end'>
          <Buttons type='btn--light' icon={true} text='Get started' />
        </div>
      </div>
    </div>
  );
}

export default FooterCTA;
