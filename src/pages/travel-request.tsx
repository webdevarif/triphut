import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Heading from 'src/components/Heading';
import FormTravelRequest from 'src/components/Forms/FormTravelRequest';

type BreadcrumbsList = {
  name: string;
  slug: string;
}

const TravelRequest =()=> {
  
  const breadcrumbs: BreadcrumbsList[] = [
    { name: 'Home', slug:'/', },
    { name: 'Contact Us', slug:'/contact-us', },
  ];

  return (
    <MainLayout>
      <Heading title="Submit Travel Request" breadcrumbs={breadcrumbs}/>
      
      <section className='py-[6rem]'>

        <div className="container">
          {/* Contact Form */}
          <div className="grid grid-cols-2 items-center  gap-y-[4rem] gap-8 xl:gap-x-[100px]">
            <div className="col-span-2 lg:col-span-1">
                <FormTravelRequest />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="text-center bg-[#FEDA7E] bg-opacity-10 px-[30px] py-[45px] rounded-[30px]">
                <h4 className='text-[24px] leading-[24px] text-black mb-[25px] font-semibold'>Whats a Video Petition?</h4>
                <div className="text-[#6B6B6B] text-[22px] leading-[33px]">A 15 second video explaining why the community should send you on your dream vacation. Please ensure your face is visible!</div>

              </div>
                
            </div>
          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default TravelRequest;