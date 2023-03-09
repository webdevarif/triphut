import React from 'react';
import { Header, Footer } from '../components/index';

interface MainLayoutProps {
  children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
