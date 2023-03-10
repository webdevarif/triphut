import React from 'react';
import Link from 'next/link';
import { Tooltip } from 'flowbite-react';
import img1 from '../../assets/images/how-it-works/1.png';
import img2 from '../../assets/images/how-it-works/2.png';
import img3 from '../../assets/images/how-it-works/3.png';
import Image from 'next/image';
function PartnersSection() {
  return (
    <div className='section'>
      <div className='container'>
        <h2 className='section-title'>
          <span>How</span> It Works
        </h2>
        <div className='mt-20 grid grid-cols-1 justify-center gap-4 md:grid-cols-3 '>
          <div className='center-element flex max-w-md flex-col justify-center gap-3 text-center'>
            <Image
              src={img1}
              alt='partner'
              width={350}
              height={350}
              className='object-contain'
            />
            <h3 className='blurb-title'>Buy our NFT</h3>
            <p className='m-auto max-w-xs text-center'>
              Well first, you&#39;ll need to buy <br /> a membership pass.
              <br /> Get one off secondary at{' '}
              <Link href='https://www.jpg.store/'>JPG.store</Link>
            </p>
          </div>
          <div className='center-element flex max-w-md flex-col justify-center gap-3 text-center'>
            <Image
              src={img2}
              alt='partner'
              width={350}
              height={350}
              className='object-contain'
            />
            <h3 className='blurb-title'>Connect your wallet & discord</h3>
            <p className='m-auto max-w-xs text-center'>
              After you&#39;ve added our NFT to your collection, you&#39;ll need
              to{' '}
              <Tooltip content='Select your choice of wallet from the dropdown that appears when you hover over the connect wallet button.'>
                <Link href='#'>Connect your Wallet</Link>
              </Tooltip>{' '}
              & <Link href='https://discord.gg/derpbirds'>Discord</Link>
            </p>
          </div>
          <div className='center-element flex max-w-md flex-col justify-center gap-3 text-center'>
            <Image
              src={img3}
              alt='partner'
              width={350}
              height={350}
              className='object-contain'
            />
            <h3 className='blurb-title'>Success!</h3>
            <p className='m-auto max-w-xs text-center'>
              Congrats, you can now claim{' '}
              <Link href='/benefits'>Travel Club Benefits</Link> &{' '}
              <Link href='/requests'>Submit a Travel Request</Link>. Be sure to
              follow the instructions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
