import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Navigation = () => {
  return (
    <div className='mt-[45px] text-center'>
        <ul className='flex gap-2 lg:gap-4 justify-center'>
            <li>
                <a href="#" className='hover:bg-danger hover:text-white hover:border-danger hover:shadow-[0px_22px_30px_rgba(255,108,44,0.32)] transition-all duration-150 ease-linear border border-[#DCE3EE] h-[32px] lg:h-[50px] min-w-[32px] lg:min-w-[50px] inline-flex items-center justify-center px-2 lg:px-5 text-black text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.08em] rounded-full'><FiChevronLeft /> Prev</a>
            </li>
            <li>
                <a href="#" className='hover:bg-danger hover:text-white hover:border-danger hover:shadow-[0px_22px_30px_rgba(255,108,44,0.32)] transition-all duration-150 ease-linear border border-[#DCE3EE] h-[32px] lg:h-[50px] min-w-[32px] lg:min-w-[50px] inline-flex items-center justify-center px-2 lg:px-5 text-black text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.08em] rounded-full'>1</a>
            </li>
            <li>
                <a href="#" className='hover:bg-danger hover:text-white hover:border-danger hover:shadow-[0px_22px_30px_rgba(255,108,44,0.32)] transition-all duration-150 ease-linear border border-[#DCE3EE] h-[32px] lg:h-[50px] min-w-[32px] lg:min-w-[50px] inline-flex items-center justify-center px-2 lg:px-5 text-black text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.08em] rounded-full'>2</a>
            </li>
            <li>
                <a href="#" className='hover:bg-danger hover:text-white hover:border-danger hover:shadow-[0px_22px_30px_rgba(255,108,44,0.32)] transition-all duration-150 ease-linear border border-[#DCE3EE] h-[32px] lg:h-[50px] min-w-[32px] lg:min-w-[50px] inline-flex items-center justify-center px-2 lg:px-5 text-black text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.08em] rounded-full'>3</a>
            </li>
            <li>
                <span className='border border-[#DCE3EE] h-[32px] lg:h-[50px] min-w-[32px] lg:min-w-[50px] inline-flex items-center justify-center px-2 lg:px-5 text-black text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.08em] rounded-full'>...</span>
            </li>
            <li>
                <a href="#" className='hover:bg-danger hover:text-white hover:border-danger hover:shadow-[0px_22px_30px_rgba(255,108,44,0.32)] transition-all duration-150 ease-linear border border-[#DCE3EE] h-[32px] lg:h-[50px] min-w-[32px] lg:min-w-[50px] inline-flex items-center justify-center px-2 lg:px-5 text-black text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.08em] rounded-full'>6</a>
            </li>
            <li>
                <a href="#" className='hover:bg-danger hover:text-white hover:border-danger hover:shadow-[0px_22px_30px_rgba(255,108,44,0.32)] transition-all duration-150 ease-linear border border-[#DCE3EE] h-[32px] lg:h-[50px] min-w-[32px] lg:min-w-[50px] inline-flex items-center justify-center px-2 lg:px-5 text-black text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.08em] rounded-full'>Next <FiChevronRight /></a>
            </li>
        </ul>
    </div>
  )
}

export default Navigation