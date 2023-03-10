import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface MainLayoutProps {
  children: ReactNode;
  newsletter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, newsletter = true }) => {
  return (
    <>
      <Header />
      {children}
      <Footer newsletter={newsletter} />
    </>
  );
};

export default MainLayout;
