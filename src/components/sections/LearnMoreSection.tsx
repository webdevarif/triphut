import React from 'react';
import { Spinner } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import { ChevronDown } from 'react-feather';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

import dynamic from 'next/dynamic';

const ConnectWalletButton = dynamic(
  () =>
    import('@cardano-foundation/cardano-connect-with-wallet').then(
      (mod) => mod.ConnectWalletButton,
    ),
  {
    loading: () => (
      <Spinner aria-label='Extra large spinner example' size='xl' />
    ),
    ssr: false,
  },
);

function PartnersSection() {
  const onConnect = (walletName: string) => {
    toast(`🦄 Wow so easy! Connacted to ${walletName}`, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <div className='learn-more-section section'>
      <ToastContainer />
      <div className='container'>
        <h4 className='section-sub-title'>
          To learn more about TripHut,
          <br /> check out our{' '}
          <span>
            <Link
              target='_blank'
              href='https://kifi-assets.s3.amazonaws.com/assets/TripHut_White+Paper.pdf'
            >
              White Paper
            </Link>
          </span>{' '}
          and our short
          <span>
            {' '}
            <Link
              target='_blank'
              href='https://www.youtube.com/watch?v=b6jv1nBw_C8'
            >
              Explainer Video
            </Link>
          </span>
        </h4>
        <div className='cta mt-20 grid md:grid-cols-2'>
          <div>
            <h3>Active Travel Requests</h3>
            <p>Connect your wallet and vote!</p>
          </div>
          <div className='tr-req btn-collapse'>
            <ConnectWalletButton
              message='Please sign Augusta Ada King, Countess of Lovelace'
              onConnect={onConnect}
              afterComponent={<ChevronDown />}
              primaryColor='#FFF'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
