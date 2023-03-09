import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Heading from 'src/components/Heading';
import { FiCheck, FiX } from 'react-icons/fi';
import Image from 'next/image';
import FormSearch from 'src/components/Forms/FormSearch';
import LearderTable from 'src/components/LearderTable';

type BreadcrumbsList = {
  name: string;
  slug: string;
}

const LeaderBoard =()=> {
  
  const breadcrumbs: BreadcrumbsList[] = [
    { name: 'Home', slug:'/', },
    { name: 'Leader Board', slug:'/leader-board', },
  ];

  const data = [
    { 
      _id: 1, 
      user: {
        name: "Jayme",
        username: "@Jayme94",
      }, 
      points: 200000,
      status: "OG",
    },
    { 
      _id: 2, 
      user: {
        name: "Jayme",
        username: "@Jayme94",
      }, 
      points: 200000,
      status: "OG",
    },
    { 
      _id: 1, 
      user: {
        name: "Jayme",
        username: "@Jayme94",
      }, 
      points: 200000,
      status: "OG",
    },
    { 
      _id: 2, 
      user: {
        name: "Jayme",
        username: "@Jayme94",
      }, 
      points: 200000,
      status: "OG",
    },
    { 
      _id: 1, 
      user: {
        name: "Jayme",
        username: "@Jayme94",
      }, 
      points: 200000,
      status: "OG",
    },
    { 
      _id: 2, 
      user: {
        name: "Jayme",
        username: "@Jayme94",
      }, 
      points: 200000,
      status: "OG",
    },
  ];

  return (
    <MainLayout>
      <Heading title="Leader Board" breadcrumbs={breadcrumbs}/>
      

      <section className='pt-[80px]'>
      <div className="container">

          <div className="grid grid-cols-12 gap-6 items-center text-center lg:text-left mb-[50px]">
            <div className='col-span-12 lg:col-span-7 xl:col-span-8'>
              <h2 className='text-[30px] md:text-[40px] xl:text-[55px] leading-[40px] md:leading-[50px] xl:leading-[68px] text-black font-medium'>Gain Eligibility for Prizes <br className='hidden lg:block'/>Based on Points Earned</h2>
            </div>
            <div className='col-span-12 lg:col-span-5 xl:col-span-4 text-center md:text-right'>
              <FormSearch />
            </div>
          </div>
          <LearderTable data={data}/>
      </div>
    </section>
    </MainLayout>
  );
}

export default LeaderBoard;