import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Heading from 'src/components/Heading';
import { FiCheck, FiX } from 'react-icons/fi';

type BreadcrumbsList = {
  name: string;
  slug: string;
}

const Vote =()=> {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `60%`
		}
		
		setStyle(newStyle);
	}, 200);

  const list = [
    {
      heading: "Send George to Fiji from 10th of October 2022 to 30th of October 2023",
      button: {
        title: "View More",
        slug: "view-more"
      },
      votes: {
        total: 10,
        good: 6,
      }
    },
    {
      heading: "Send George to Fiji from 10th of October 2022 to 30th of October 2023",
      button: {
        title: "View More",
        slug: "view-more"
      },
      votes: {
        total: 10,
        good: 8,
      }
    },
    {
      heading: "Send George to Fiji from 10th of October 2022 to 30th of October 2023",
      button: {
        title: "View More",
        slug: "view-more"
      },
      votes: {
        total: 10,
        good: 8,
      }
    },
    {
      heading: "Send George to Fiji from 10th of October 2022 to 30th of October 2023",
      button: {
        title: "View More",
        slug: "view-more"
      },
      votes: {
        total: 10,
        good: 6,
      }
    },
    {
      heading: "Send George to Fiji from 10th of October 2022 to 30th of October 2023",
      button: {
        title: "View More",
        slug: "view-more"
      },
      votes: {
        total: 10,
        good: 8,
      }
    },
    {
      heading: "Send George to Fiji from 10th of October 2022 to 30th of October 2023",
      button: {
        title: "View More",
        slug: "view-more"
      },
      votes: {
        total: 10,
        good: 8,
      }
    },
  ]
  
  const breadcrumbs: BreadcrumbsList[] = [
    { name: 'Home', slug:'/', },
    { name: 'Vote', slug:'/vote', },
  ];

  return (
    <MainLayout>
      <Heading title="Sponsor a Travel Request" breadcrumbs={breadcrumbs}/>
      
      <section className='py-[6rem]'>

        <div className="container">
          {/* Heading */}
          <div className="max-w-[660px] mx-auto text-[26px] leading-[40px] text-black text-center mb-[45px]">The Health of our Community Depends on YOUR votes. Vote today and earn points towards rewards!</div>

          {/* Content */}
          {list && <ul className='flex xl:px-[30px] flex-col gap-[30px]'>
            {list.map((item, i) =>(
              <li key={i} className='rounded-[16px] border overflow-hidden border-[rgba(255,108,44,0.4)] shadow-[0px_30px_94px_-4px_rgba(255,108,44,0.1)]'>
                <div className="grid grid-cols-12 gap-3 items-center px-[25px] md:px-[35px] py-[18px] border-l-[10px] border-l-[#FF6C2C]">
                <div className="col-span-12 lg:col-span-5">
                  <h2 className="mb-0 text-black text-[18px] xl:text-[22px]leading-[28px] xl:leading-[32px] font-semibold">{item.heading}</h2>

                </div>
                <div className="col-span-12 lg:col-span-7 xl:pl-[60px]">                  
                  <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between">
                    <div className="w-[235px] lg:w-[145px] xl:w-[235px] max-w-full">
                      <div className="progress bg-[#DBF3EC] rounded-full rounded-full overflow-hidden w-full h-[16px] mb-1">
                        <div className="progress-bar h-full rounded-r-full bg-success" style={style}>
                        </div>
                      </div>
                      <h6 className='text-18px text-success leading-[22px]'>6 Votes</h6>
                    </div>


                  {/* Actions */}
                    <div className='flex flex-col items-center sm:flex-row gap-4'>
                      <div className="flex gap-2">
                        <button className='bg-[#FFECBB] w-[42px] h-[42px] flex items-center justify-center text-xl text-black rounded-full transition-all duration-150 hover:bg-success hover:text-white ease-linear'><FiCheck /></button>
                        <button className='bg-[#FFECBB] w-[42px] h-[42px] flex items-center justify-center text-xl text-black rounded-full transition-all duration-150 hover:bg-danger hover:text-white ease-linear'><FiX /></button>
                      </div>
                      <div>
                      <a href={item.button.slug} className="whitespace-nowrap inline-flex items-center justify-center px-[35px] md:px-[26px] xl:px-[35px] py-[14px] md:py-[12px] xl:py-[15px] uppercase text-[16px] leading-[22px] font-medium shadow-[0px_19px_26px_rgba(255,108,44,0.2)] text-white bg-danger rounded-full h-[50px] md:h-[46px] xl:h-[52px] transition-all duration-150 ease-linear hover:bg-success hover:text-white">{item.button.title}</a>
                      </div>
                    </div>
                  </div>

                </div>

                </div>
              </li>
            ))}
          </ul>}

        </div>

      </section>

    </MainLayout>
  );
}

export default Vote;