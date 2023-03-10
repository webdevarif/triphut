import Image from 'next/image'
import React from 'react';
import BuyNFTBanner from './buy-nft.svg';
import ConnectWallet from './connect-your-wallet-discord.svg';
import Success from './success.svg';

const ImageText = () => {
    const data = [
        {
            thumbnail: BuyNFTBanner,
            title: "Buy our NFT",
            content: `<p>Well first, you'll need to buy a membership pass. Get one off secondary at <a href="#">JPG.store</a></p>`
        },
        {
            thumbnail: ConnectWallet,
            title: "Connect your wallet & discord",
            content: `<p>After you've added our NFT to your collection, you'll need to <a href="#">Connect your Wallet</a> & <a href="#">Discord</a></p>`
        },
        {
            thumbnail: Success,
            title: "Success",
            content: `<p>Congrats, you can now claim <a href="#">Travel Club Benefits</a> & <a href="#">Submit a Travel Request</a>. Be sure to follow the instructions!</p>`
        },
    ]
  return (
    <section className='pt-[100px] text-center'>
        <div className="container">
            {/* Section Title */}
            <div className="text-center mb-[80px]">
                    <h2 className="text-black font-bold xl:text-[55px] xl:leading-[52px] md:text-[45px] md:leading-[52px] text-[30px] leading-[30px]"><span className='font-normal text-success'>How</span> It Works</h2>
            </div>

            <div className="grid grid-cols-3 gap-y-[50px] gap-x-[90px]">
                {data && data.map((item, i) =>(
                <div key={i} className="col-span-3 md:col-span-1">
                    <div className="image-text-widget flex flex-col gap-3">
                        <Image src={item.thumbnail.src} width={item.thumbnail.width} height={item.thumbnail.height} alt={item.title} className='w-full h-auto'/>
                        <div className="px-0">
                            {item.title &&<h2 className='text-black font-medium text-[20px] md:text-[22px] xl:text-[28px] leading-[24px] md:leading-[26px] xl:leading-[33px] mb-[20px]'>{item.title}</h2>}
                            {item.content && <div className='text-[16px] xl:text-[18px] leading-[26px] md:leading-[25px] xl:leading-[27px]' dangerouslySetInnerHTML={{__html: item.content}} />}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ImageText