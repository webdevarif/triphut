import React from 'react';
import { Header } from '../..';
import heroBg from './hero-banner.svg';
import { useRouter } from 'next/router';

interface HeroHeaderProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
}

function HeroHeader({ title, subtitle, buttonText }: HeroHeaderProps) {
  const styles = {
    backgroundImage: `url("${heroBg.src}")`,
  };

  const { pathname } = useRouter();
  const routeName = pathname.split('/')[1];
  const parentPages = routeName?.split('-');
  const parentPage = parentPages ? parentPages[0] : null;

  return (
    <div className='bg-hero-pattern   bg-cover bg-center' style={styles}>
      <Header />
      <div className='page-hero container'>
        <div className='group text-center'>
          <h1 className='hero-heading'>{title}</h1>
          <ul className='breadcrumb flex items-center justify-center gap-2'>
            <li>HOME</li>
            <li>{'>'}</li>
            <li className='breadcrumb-active'>
              {' '}
              {parentPage?.toLocaleUpperCase()}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
