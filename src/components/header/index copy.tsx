import React from 'react';
import { Dropdown, Navbar, Spinner } from 'flowbite-react';
import { ChevronDown } from 'react-feather';
import styled from 'styled-components';
import Image from 'next/image';
import logo from './logo.svg';
import Buttons from '../buttons/index';
import Link from 'next/link';
import { toast } from 'react-toastify';
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

const NavLink = styled(Link)``;

const NavDropdown = styled(Dropdown)`
  @media screen and (max-width: 991px) {
    div {
      margin: 10px 0;
    }
  }
`;

function Header() {
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
    <Navbar className='navbar' fluid={true} rounded={true}>
      <Navbar.Brand href='/'>
        <Image
          src={logo}
          alt='TripHut Logo'
          width={92}
          height={94}
          className='mr-2'
        />
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavDropdown arrowIcon={true} inline={true} label='Community'>
          {ddlPaths.map((item, index) => (
            <NavDropdown.Item key={index}>
              <Link href={item.path}>{item.name}</Link>{' '}
            </NavDropdown.Item>
          ))}
        </NavDropdown>{' '}
        {paths.map((item, index) => (
          <NavLink key={index} href={item.path}>
            {item.name}{' '}
          </NavLink>
        ))}
      </Navbar.Collapse>
      <Navbar.Collapse className='btn-collapse'>
        <div className='block'>
          <Buttons
            icon={true}
            type='btn--line-dark'
            link='https://discord.gg/derpbirds'
            text='connect discord'
          />
          <ConnectWalletButton
            message='Please sign Augusta Ada King, Countess of Lovelace'
            onConnect={onConnect}
            afterComponent={<ChevronDown />}
            primaryColor='#FFF'
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

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
];

const ddlPaths = [
  {
    name: 'Become a Member',
    path: 'https://www.jpg.store/',
  },
  {
    name: 'Submit a Travel Request',
    path: '/requests/submit',
  },
  {
    name: 'Vote',
    path: '/requests/vote',
  },
];

export default Header;
