import Image from 'next/image'
import React from 'react';
import BuyNFTBanner from './buy-nft.svg';
import ConnectWallet from './connect-your-wallet-discord.svg';
import Success from './success.svg';

const CtaAction = () => {
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
    <section className='py-[100px]'>
        <div className="container">
            {/* Section Title */}
            <h3 className="text-center mb-[80px] text-black font-regular xl:text-[36px] xl:leading-[50px] md:text-[26px] md:leading-[38px] text-[24px] leading-[40px]">To learn more about TripHut, <br />check out our <a href="#" className="text-success font-medium">White Paper</a> and our short <a href="#" className="text-success font-medium">Explainer Video</a></h3>

            <div className="bg-[#F47F3A] shadow-danger flex flex-col gap-5 lg:flex-row items-center justify-between px-[20px] lg:px-[50px] py-[65px] rounded-[32px] text-white">
                <div className="lg:text-left text-center">
                    <h2 className='mb-[5px] text-white font-bold xl:text-[48px] leading-[1.3] md:text-[40px] text-[26px]'>Active Travel Requests</h2>
                    <p className='text-white font-light xl:text-[30px] md:text-[24px] text-[20px] leading-[1.3]'>Connect your wallet and vote!</p>
                </div>
                <div><button className='hover:bg-warning ease-linear transition-all duration-150 uppercase font-medium tracking-[0.08em] xl:text-[20px] md:text-[18px] text-[16px] leading-[1.2] bg-white text-black  xl:py-[25px] md:py-[20px] py-[16px] xl:px-[35px] px-[25px] xl:h-[70px] md:h-[60px] h-[50px] flex items-center justify-center rounded-full shadow-[0px_26px_45px_rgba(0,0,0,0.13)]'>Connect Wallet</button></div>
            </div>
        </div>
    </section>
  )
}

export default CtaAction