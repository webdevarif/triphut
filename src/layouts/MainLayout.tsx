import React, { ReactNode } from 'react';
import { Header, Footer } from '../components';

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

