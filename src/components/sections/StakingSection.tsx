import React from "react";
import img from "../../assets/images/nft-dummy-img.png";
import Image from "next/image";
import { Buttons } from "../index";
function StakingSection() {
  const nfts = [
    {
      id: 1,
      src: img.src,
      title: "NFT Title",
      description: "NFT Description",
      price: "1000",
      rewards: "100",
    },
    {
      id: 2,
      src: img.src,
      title: "NFT Title",
      description: "NFT Description",
      price: "1000",
      rewards: "100",
    },
    {
      id: 3,
      src: img.src,
      title: "NFT Title",
      description: "NFT Description",
      price: "1000",
      rewards: "100",
    },
    {
      id: 4,
      src: img.src,
      title: "NFT Title",
      description: "NFT Description",
      price: "1000",
      rewards: "100",
    },
    {
      id: 5,
      src: img.src,
      title: "NFT Title",
      description: "NFT Description",
      price: "1000",
      rewards: "100",
    },
    {
      id: 6,
      src: img.src,
      title: "NFT Title",
      description: "NFT Description",
      price: "1000",
      rewards: "100",
    },
    {
      id: 7,
      src: img.src,
      title: "NFT Title",
      description: "NFT Description",
      price: "1000",
      rewards: "100",
    },
    {
      id: 8,
      src: img.src,
      title: "NFT Title",
      description: "NFT Description",
      price: "1000",
      rewards: "100",
    },
  ];

  return (
    <div className="benefits-section">
      <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="col-span-3">
          <h3 className="content-title">
            Stake Your NFT & Earn <br /> <span>$TRIPS</span> or other Rewards
          </h3>
          <p className="text text-gray-500">
            “Deposit” your NFT and earn your share of tokens!
          </p>
        </div>
        <div className="flex items-center justify-end">
          <div>
            <Buttons
              type="btn--accent"
              size="btn--md"
              text="Deposit NFT"
              icon={true}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {nfts.map((nft) => (
        <div key={nft.id} className="card overflow-hidden rounded">
          <div  className="">
            <Image
              src={img.src}
              alt="partner"
              width={500}
              height={300}
              className="w-full object-contain"
            />
          </div>
          <div className="p-6">
            <div className="flex w-full items-center justify-between">
              <div>icons</div>
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.465 15.5325C9.21 15.6225 8.79 15.6225 8.535 15.5325C6.36 14.79 1.5 11.6925 1.5 6.4425C1.5 4.125 3.3675 2.25 5.67 2.25C7.035 2.25 8.2425 2.91 9 3.93C9.7575 2.91 10.9725 2.25 12.33 2.25C14.6325 2.25 16.5 4.125 16.5 6.4425C16.5 11.6925 11.64 14.79 9.465 15.5325Z"
                    stroke="#808191"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="m-0">100</p>
              </div>
            </div>

            <p className="blurb-title text-left">Abstract Cube #2000</p>
            <div className="mb-4 flex gap-3">
              <div className="crypto-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="12" fill="#EBEDFC" />
                  <g clip-path="url(#clip0_108_512)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1584 20L7.33301 12.8889L12.1584 15.9365L16.9838 12.8889L12.1584 20Z"
                      fill="#3C50E0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1582 20V15.9365L16.9836 12.8889L12.1582 20Z"
                      fill="#3C50E0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1584 4L16.9838 12.127L12.1584 15.1746L7.33301 12.127L12.1584 4Z"
                      fill="#3C50E0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1582 4L16.9836 12.127L12.1582 15.1746L12.1582 9.84127V4Z"
                      fill="#3C50E0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1582 4L16.9836 12.127L12.1582 9.84127V4Z"
                      fill="#3C50E0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.9838 12.127L12.1584 15.1746L7.33301 12.127L12.1584 9.84131L16.9838 12.127Z"
                      fill="#3C50E0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_108_512">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(4 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
                <span className="text-green-500 font-bold">27.5 ETH </span> 1/1
              </p>
            </div>
            <Buttons
              type="btn--line-dark"
              size="btn--sm"
              text="Stake Now"
              width="btn--full"
              icon={true}
            />
          </div>
        </div>
        ))}
      </div>
      <p className="mt-5 text-center text-gray-400">* Your NFT never actually leaves your wallet as we use liquid staking mechanics.</p>
    </div>
  );
}

export default StakingSection;
