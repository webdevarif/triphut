import React from 'react';
import { Accordion } from 'flowbite-react';

function FAQsection() {
  const faqs = [
    {
      question: 'How does the Travel Club Works?',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'What are the benefits of joining the Travel Club?',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'How do I join?',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'How can I participate?',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'What do all these terms I am unfimiliar with mean?',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
    {
      question: 'How do we get in contact with TripHut?',
      answer:
        'A hackathon is a 24-hour event where people come together to create something new. It’s a place where you can learn, build, and share your ideas with others. Hackathons are a great way to meet new people, learn new skills, and build something you’re proud of.',
    },
  ];

  return (
    <div className='container-small'>
      <div className='faq-section'>
        <Accordion alwaysOpen={true}>
          {faqs.map((faq, idx) => (
            <Accordion.Panel
              className='faq-toggle faq-container my-8'
              key={idx}
            >
              <Accordion.Title className='faq-header'>
                <span className='faq-toggle__circle'>{idx + 1}</span>
                <span className='faq-toggle__question'>{faq.question}</span>
              </Accordion.Title>
              <Accordion.Content>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQsection;
