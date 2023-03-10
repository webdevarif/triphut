import Image from 'next/image'
import React from 'react';
import BuyNFTBanner from './buy-nft.svg';
import ConnectWallet from './connect-your-wallet-discord.svg';
import Success from './success.svg';
import Thumb1 from './p-1.png';
import Thumb2 from './p-2.png';
import Thumb3 from './p-3.png';
import Thumb4 from './p-4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Partners = () => {
    const data = [
        {
            thumbnail: Thumb1,
        },
        {
            thumbnail: Thumb2,
        },
        {
            thumbnail: Thumb3,
        },
        {
            thumbnail: Thumb4,
        },
        {
            thumbnail: Thumb1,
        },
        {
            thumbnail: Thumb2,
        },
        {
            thumbnail: Thumb3,
        },
        {
            thumbnail: Thumb4,
        },
    ]
  return (
    <section className='text-center'>
        <div className="container">
            {/* Section Title */}
            <div className="text-center mb-[50px]">
                    <h2 className="text-black font-bold xl:text-[55px] xl:leading-[52px] md:text-[45px] md:leading-[52px] text-[30px] leading-[30px]"><span className='font-normal text-success'>Our</span> Partners</h2>
            </div>

            <Swiper
                className="partners-carousel"
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={4}
                scrollbar={{ draggable: true }}
            >
            {data && data.map((slide, i) =>(
                <SwiperSlide key={i}>
                <div className='swiper-slide'>
                    <Image src={slide.thumbnail.src} height={slide.thumbnail.height} width={slide.thumbnail.width} alt="slide" />
                </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Partners