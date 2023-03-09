import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Heading from 'src/components/Heading';
import StakeSection from 'src/components/stakes';

type BreadcrumbsList = {
  name: string;
  slug: string;
}

const Staking =()=> {
  
  const breadcrumbs: BreadcrumbsList[] = [
    { name: 'Home', slug:'/', },
    { name: 'Stake', slug:'/staking', },
  ];

  return (
    <MainLayout>
      <Heading title="Staking" breadcrumbs={breadcrumbs}/>
      <StakeSection />

    </MainLayout>
  );
}

export default Staking;