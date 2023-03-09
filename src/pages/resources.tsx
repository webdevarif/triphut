import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Heading from 'src/components/Heading';
import Accordion from 'src/components/Accordion';

type BreadcrumbsList = {
  name: string;
  slug: string;
}

type ResourcesList = {
  question: string;
  answer: string;
}

const Resources =()=> {
  
  const breadcrumbs: BreadcrumbsList[] = [
    { name: 'Home', slug:'/', },
    { name: 'Resources', slug:'/resources', },
  ];
  
  const resourcesList: ResourcesList[] = [
    {
      question: 'TripHut Explainer Video',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'DAO Canvas',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'DAO White Paper',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'DAO Constitution',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
  ];


  return (
    <MainLayout>
      <Heading title="Resources" breadcrumbs={breadcrumbs}/>
      <Accordion list={resourcesList} />
    </MainLayout>
  );
}

export default Resources;
