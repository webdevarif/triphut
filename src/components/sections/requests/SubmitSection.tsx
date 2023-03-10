import React, { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'flowbite-react';
import { ArrowRight } from 'react-feather';

import { useVoteStore, Request } from 'src/features/state';
const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length: number): string {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function SubmitSection() {
  const [loading, setLoading] = useState(false);
  const addRequest = useVoteStore((state) => state.addRequest);
  const requests = useVoteStore((state) => state.requests);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    await sleep(5000);
    const request: Request = {
      id: requests.length + 1,
      name: generateString(getRandomInt(20)),
      email: data.email,
      destination: data.destination,
      phone: data.phone,
      residence: data.residence,
      video: data.video,
      date: data.date,
      yes: 0,
      no: 0,
    };
    addRequest(request);
    reset();
    setLoading(false);
    toast(`🦄 Wow so easy! We just submitted your request!!!`, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  return (
    <div
      style={{ paddingLeft: '20px', paddingRight: '20px' }}
      className='grid grid-cols-1 gap-20 md:grid-cols-2'
    >
      {/* left column */}
      <div className='flex flex-col justify-center'>
        <form className='request' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              {...register('email')}
              type='email'
              className='form-control'
              id='email'
              placeholder='Enter email'
            />
          </div>
          <ToastContainer />
          <div className='flex gap-5'>
            <div className='form-group'>
              <label htmlFor='residence'>Country of Residence</label>
              <input
                {...register('residence')}
                type='text'
                className='form-control'
                id='residence'
                placeholder='Jamaica'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='destination'>Desired Destination</label>
              <input
                {...register('destination')}
                type='text'
                className='form-control'
                id='destination'
                placeholder='Barbados'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>Phone</label>
            <input
              {...register('phone')}
              type='text'
              className='form-control'
              id='phone'
              placeholder='Enter phone'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='date'>Date</label>
            <input
              {...register('date')}
              type='date'
              className='form-control'
              id='date'
              placeholder='Enter date'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='video'>Video</label>
            <input
              {...register('video')}
              type='text'
              className='form-control'
              id='video'
              placeholder='Enter video'
            />
          </div>
          <button type='submit' disabled={loading} className='btn btn--accent'>
            {loading && (
              <Spinner color='info' aria-label='Info spinner example' />
            )}
            Submit
            <ArrowRight />
          </button>
        </form>
      </div>

      <div className='flex flex-col justify-start'>
        <div className='mt-12 rounded-lg bg-yellow-100 p-10 text-center'>
          <h4 className='blurb-title'>What&apos;s a Video Petition?</h4>
          <p className='text'>
            A 15 second video explaining why the community should send you on
            your dream vacation. Please ensure your face is visible!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubmitSection;
