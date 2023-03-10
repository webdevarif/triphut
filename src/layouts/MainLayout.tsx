import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface Props {
  children: ReactNode;
  newsletter?: boolean;
}

const MainLayout = ({ children, newsletter = true }: Props) => (
  <>
    <Header />
    {children}
    <Footer newsletter={newsletter} />
  </>
);

export default MainLayout;
