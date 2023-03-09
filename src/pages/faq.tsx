import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Heading from 'src/components/Heading';
import Accordion from 'src/components/Accordion';

type BreadcrumbsList = {
  name: string;
  slug: string;
}

type FaqList = {
  question: string;
  answer: string;
}

const FAQ =()=> {
  
  const breadcrumbs: BreadcrumbsList[] = [
    { name: 'Home', slug:'/', },
    { name: 'faqs', slug:'/faqs', },
  ];
  
  const list: FaqList[] = [
    {
      question: 'How does the Travel Club Works?',
      answer: 'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'What are the benefits of joining the Travel Club?',
      answer: 'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'How do I join?',
      answer: 'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'How can I participate?',
      answer: 'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'What do all these terms I am unfimiliar with mean?',
      answer: 'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'How do we get in contact with TripHut?',
      answer: 'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
  ];

  return (
    <MainLayout>
      <Heading title="Frequently Asked Questions" breadcrumbs={breadcrumbs}/>
      <Accordion list={list} />
    </MainLayout>
  );
}

export default FAQ;