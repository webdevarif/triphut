import React, { ReactNode } from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/header';

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
