import React from 'react';
import BG from './bg.svg';
import { FiChevronRight } from 'react-icons/fi';

interface Props {
    title: string;
    breadcrumbs: { name: string; slug: string }[];
}

  const Heading = ({ title, breadcrumbs }: Props) => {
  return (
    <section className='xl:min-h-[26rem] pb-10 pt-[6rem] md:pt-[8.5rem] xl:pt-[10rem] flex flex-col items-center justify-center text-center bg-[#FFFAF1] bg-cover bg-[center_bottom]' style={{ backgroundImage: `url(${BG.src})` }}>
        <div className="container">
            <div className="heading-content">
                {title && <h1 className='text-[30px] md:text-[48px] xl:text-[70px] font-semibold text-black leading-[40px] md:leading-[55px] xl:leading-[82px] mb-3'>{title}</h1>}
                {breadcrumbs && (
                    <ul className="list-none uppercase text-[16px] xl:text-[22px] leading-[21px] xl:leading-[34px] font-medium tracking-[0.08em] flex justify-center gap-[0.5rem] items-center">
                        {breadcrumbs.map((breadcrumb, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    {index === breadcrumbs.length - 1 ? (
                                    <span>{breadcrumb.name}</span>
                                    ) : (
                                    <a className='text-danger' href={breadcrumb.slug}>{breadcrumb.name}</a>
                                    )}
                                </li>
                                {index !== breadcrumbs.length - 1 && <li className='text-xl'><FiChevronRight/></li>}
                            </React.Fragment>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </section>
  );
}

export default Heading;
