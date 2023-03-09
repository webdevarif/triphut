import React from 'react';
import { X, Check } from 'react-feather';
import { Progress, ProgressColor } from 'flowbite-react';
import { Buttons } from '../../../components/index';

import { useVoteStore } from 'src/features/state';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'Nobember',
  'December',
];
const getPostFix = (day: number) => {
  switch (day) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

function VotingSection() {
  const requests = useVoteStore((state) => state.requests);

  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl '>
          The Health of our Community Depends on YOUR votes.
        </h2>
        <h2 className='text-2xl '>
          Vote today and earn points towards rewards!
        </h2>

        <div className='mt-20 flex w-full flex-col gap-8'>
          {requests.map((request) => {
            const date = new Date(request.date);
            let endDate = new Date(request.date);
            endDate = new Date(endDate.setDate(endDate.getDay() + 2));
            console.log(endDate);
            console.log(date.getDay() + 1);
            console.log(Math.floor((100 * (request.yes + request.no)) / 100));
            return (
              <div key={request.id} className='vote-item'>
                <p className='blurb-title'>
                  <>
                    {`Send ${request.name} to ${request.destination}
                      from ${date.getDay()}${getPostFix(date.getDay())} of
                      ${months[date.getMonth()]} `}
                  </>
                  <>
                    {`${date.getFullYear()} to ${endDate.getDay()}${getPostFix(
                      endDate.getDay(),
                    )} of ${months[endDate.getMonth()]
                      } ${endDate.getFullYear()}`}
                  </>
                </p>
                <div className='voting-bar-container'>
                  <div className='voting-bar'>
                    <Progress
                      progress={Math.floor(
                        (100 * (request.yes - request.no)) / 100,
                      )}
                      size='md'
                      color='#00af7c'
                    />
                  </div>
                  <div className='voting-bar-label'>
                    {request.yes - request.no}
                  </div>
                </div>
                <div className='flex gap-2'>
                  <div className='voting-btn'>
                    <Check />
                  </div>
                  <div className='voting-btn'>
                    <X />
                  </div>
                </div>
                <div>
                  <Buttons type='btn--accent' icon={true} text='View More ' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VotingSection;
