import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Heading from 'src/components/Heading';
import BenefitsSection from 'src/components/Benefits';

type BreadcrumbsList = {
  name: string;
  slug: string;
}

const Benefits =()=> {
  
  const breadcrumbs: BreadcrumbsList[] = [
    { name: 'Home', slug:'/', },
    { name: 'Benefits', slug:'/benefits', },
  ];

  return (
    <MainLayout>
      <Heading title="Travel Club Benefits" breadcrumbs={breadcrumbs}/>

      <BenefitsSection />
    </MainLayout>
  );
}

export default Benefits;