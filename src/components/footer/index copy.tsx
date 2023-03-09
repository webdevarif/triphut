import React, { useState } from 'react';
import Link from 'next/link';
import FooterCTA from './FooterCTA';
import Buttons from '../buttons';
import styled from 'styled-components';
import { Footer as FooterStructure } from 'flowbite-react';
import {
  ArrowRight,
  Twitter,
  Instagram,
  Mail,
  ChevronDown,
} from 'react-feather';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import dynamic from 'next/dynamic';

const ConnectWalletButton = dynamic(
  () =>
    import('@cardano-foundation/cardano-connect-with-wallet').then(
      (mod) => mod.ConnectWalletButton,
    ),
  {
    ssr: false,
  },
);

const Footer = styled(FooterStructure)`
  background-color: #333132 !important;
  img {
    width: 150px;
    height: 150px;
  }
`;

const FooterContainer = styled.div`
  background-color: #333132 !important;
`;

const ConnectButton = styled(Buttons)`
  svg {
    margin-left: 5px;
  }
`;

function FooterSection() {
  const [email, setEmail] = useState('');
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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    console.log(email);
  };

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    toast(`Thanks ${email}, we will add you to our mailng list`, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setEmail('');
  };

  return (
    <div className='footer-container'>
      <FooterContainer className='footer-container container'>
        <Footer bgDark={true}>
          <div className='w-full'>
            <FooterCTA />
            <div className='footer-restructure grid-cols grid w-full gap-8 py-8 px-6 md:grid-cols-4'>
              <div>
                <Footer.Brand
                  src='/images/triphut_logo.png'
                  alt='TripHut Logo'
                />
                <p className='text--light max-w-sm' style={{ color: '#fff' }}>
                  Travel Made Affordable
                </p>
              </div>
              <div>
                <Footer.Title className='color-white' title='Community' />
                <Footer.LinkGroup col={true}>
                  {community.map((item, index) => (
                    <Link href={item.path} key={index}>
                      {item.name}
                    </Link>
                  ))}
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='color-white' title='Pages' />
                <Footer.LinkGroup col={true}>
                  {paths.map((item, index) => (
                    <Link href={item.path} key={index}>
                      {item.name}
                    </Link>
                  ))}
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='color-white' title='Connect with Us' />
                <Footer.LinkGroup col={true}>
                  <Footer.Link
                    className='email'
                    href='mailto:triphut_by@yaadlabs.io'
                  >
                    <Mail />
                    triphut_by@yaadlabs.io
                  </Footer.Link>
                </Footer.LinkGroup>
                <div className='social w-full py-6 sm:flex sm:items-center'>
                  <Footer.Icon
                    href='https://instagram.com/trip_hut?igshid=Yzg5MTU1MDY='
                    icon={Instagram}
                    target='_blank'
                  />
                  <Footer.Icon
                    className='fill-orange rounded-full'
                    href='https://twitter.com/trip_hut?t=GhJ-5OTPMc7wCcu4szmQdw&s=09'
                    icon={Twitter}
                    target='_blank'
                  />
                </div>
              </div>
            </div>
            <div className='w-full py-6 px-4 sm:flex sm:items-center sm:justify-between'>
              <div className='btn-collapse sm:justify-between'>
                <ConnectWalletButton
                  message='Please sign Augusta Ada King, Countess of Lovelace'
                  onConnect={onConnect}
                  afterComponent={<ChevronDown />}
                  primaryColor='#FFF'
                />
                <ConnectButton
                  icon={true}
                  type='btn--secondary'
                  text='Connect Discord'
                  link='https://discord.gg/derpbirds'
                />
              </div>
              <div className='mt-4 block space-x-6 sm:mt-0 sm:justify-center'>
                <div>
                  <p className='color-grey margin-bottom-5'>
                    &#169; Copyright 2022 by TripHut™ Limited
                  </p>
                  <p className='color-grey'>All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </Footer>
      </FooterContainer>
    </div>
  );
}

export default FooterSection;

const paths = [
  {
    name: 'Travel Club Benefits',
    path: '/benefits',
  },
  {
    name: 'Resources',
    path: '/resources',
  },
  {
    name: 'FAQs',
    path: '/faq',
  },
  {
    name: 'Privacy Policy',
    path: '/leader',
  },
  {
    name: 'Terms of Use',
    path: '/requests',
  },
];

const community = [
  {
    name: 'Become a Member',
    path: '/',
  },
  {
    name: 'Submit a Travel Request',
    path: '/',
  },
  {
    name: 'Submit a Proposal',
    path: '/',
  },
  {
    name: 'Vote',
    path: '/',
  },
];
