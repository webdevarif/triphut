import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface Props {
  list: { question: string; answer: string }[];
}

const Accordion = ({ list }: Props) => {
  const [show, setShow] = useState<number | null>(null);

  const toggleShow = (i: number): void => {
    setShow(prevShow => prevShow === i ? null : i);
  }

  return (
    <div className='faq-section pt-[6rem] px-3'>
      <div className='max-w-[64rem] mx-auto'>

      {list && <ul className='accordion__list list-none flex flex-col gap-[1.875rem]'>{list.map((item, i) =>(
        <li key={i} className='accordion__item border border-[#E6ECF5] py-[10px] md:py-[15px] lg:py-[25px] px-[10px] md:px-[25px] lg:px-[40px] rounded-[10px] md:rounded-[16px] bg-white'>
          {/* Faq Title */}
          <h2 className='text-[18px] md:text-[24px] lg:text-[26px] cursor-pointer leading-[1.3] text-black font-medium flex gap-3 lg:gap-[30px] lg:items-center' onClick={() => toggleShow(i + 1)}>
            <span className='h-[30px] lg:h-[50px] min-w-[30px] lg:min-w-[50px] font-ubuntu bg-success text-white rounded-full inline-flex items-center justify-center font-bold'>{i+1}</span>
            {item.question}
            <span className='ml-auto float-right text-success'><FiChevronDown /></span>
          </h2>

          {/* Faq Body */}
          <div className={`accordion__body text-sm sm:text-base ease-linear duration-300 delay-75 transition-all ${show === i+1 ? 'max-h-[99rem] opacity-100 pt-[2rem] visible' : 'max-h-0 opacity-0 pt-0 invisible' }`}>{item.answer}</div>
        </li>
        ))}</ul>}
      </div>
    </div>
  );
}

export default Accordion;
