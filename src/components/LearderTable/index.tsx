import Image from 'next/image';
import React from 'react';
import UserThumb from './user-1.png';
import Batch from './bluebatch.png';
import Navigation from '../Navigation';

  interface Props {
    data : {
        _id: number;
        user: {
          name: string,
          username: string,
        },
        points: number,
        status: string,
    }[]
}

  const LearderTable = ({ data }: Props) => {
  return (
     data && 
     <div className='table-group'>
        <div className='rounded-[12px] overflow-hidden border border-[#E6ECF5] overflow-x-auto'>
          <table className="table-auto w-full">
            <thead className='bg-black text-left text-white shadow-[0px_14px_24px_-4px_rgba(0,0,0,0.2)]'>
              <tr>
                <th className='p-[20px] pl-[15px] lg:pl-[60px] text-[15px] lg:text-[19px] leading-[28px] whitespace-nowrap'>#</th>
                <th className='p-[20px] text-[15px] lg:text-[19px] leading-[28px] whitespace-nowrap'>Username</th>
                <th className='p-[20px] text-[15px] lg:text-[19px] leading-[28px] whitespace-nowrap'>Points Earned</th>
                <th className='p-[20px] text-[15px] lg:text-[19px] leading-[28px] whitespace-nowrap pr-[15px] lg:pr-[60px]'>Status</th>
              </tr>
            </thead>
            <tbody>
              
              {data?.map((item, i) =>(
                <tr key={i} className={`${i === data?.length - 1 ? '' : 'border-b border-b-[#E6ECF5]'} ${i % 2 === 0 ? '' : 'bg-[#F9F9F9]'}`}>
                  <td className='text-black font-medium text-[15px] lg:text-[18px] leading-[24px] px-[20px] py-[15px] lg:p-[20px] lg:pl-[60px] whitespace-nowrap'>{item._id}</td>
                  <td className='text-black font-medium text-[15px] lg:text-[18px] leading-[24px] px-[20px] py-[15px] lg:p-[20px] whitespace-nowrap'>
                    <div className="flex items-center gap-[13px] text-black">
                      <div className="relative min-w-[50px]">
                      <Image src={UserThumb.src} width={50} height={50} alt={item.user.name}/>
                      <span className='inline-block w-[18px] h-[18px] bg-cover absolute right-0 bottom-0' style={{ backgroundImage: `url(${Batch.src})` }}></span>
                      </div>
                      <span>{item.user.username}</span>
                    </div>
                    </td>
                  <td className='text-black font-medium text-[15px] lg:text-[18px] leading-[24px] px-[20px] py-[15px] lg:p-[20px] whitespace-nowrap'>{item.points}</td>
                  <td className='text-black font-medium text-[15px] lg:text-[18px] leading-[24px] px-[20px] py-[15px] lg:p-[20px] whitespace-nowrap pr-[15px] lg:pr-[60px]'>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Navigation />
      </div>
    )
  }

export default LearderTable;