import React from 'react';
import Link from 'next/link';
import { Accordion } from 'flowbite-react';
import { ChevronRight } from 'react-feather';
function ResourcesSection() {
  const resources = [
    {
      text: 'TripHut Explainer Video',
      link: 'https://youtu.be/b6jv1nBw_C8',
    },
    {
      text: 'DAO Canvas',
      link: `https://kifi-assets.s3.amazonaws.com/assets/TripHut_D'App+Brief.pdf`,
    },
    {
      text: 'DAO White Paper',
      link: 'https://kifi-assets.s3.amazonaws.com/assets/TripHut_White+Paper.pdf',
    },
    {
      text: 'DAO Constitution',
      link: `https://kifi-assets.s3.amazonaws.com/assets/TripHut_D'App+Brief.pdf`,
    },
  ];

  return (
    <div className='container-small'>
      <div className='faq-section'>
        <Accordion
          arrowIcon={ChevronRight}
          alwaysOpen={false}
          className='remove-first'
        >
          {resources.map((resource, idx) => (
            <Link href={resource.link} key={idx} target='_blank'>
              <Accordion.Panel className='faq-toggle faq-container my-8'>
                <Accordion.Title className='faq-header faq-header__grid-3'>
                  <span className='faq-toggle__circle'>{idx + 1}</span>
                  <span className='faq-toggle__question'>{resource.text}</span>
                  <span
                    className='right-auto'
                    style={{ display: 'inline-flex', float: 'right' }}
                  >
                    <ChevronRight />
                  </span>
                </Accordion.Title>
              </Accordion.Panel>
            </Link>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default ResourcesSection;
