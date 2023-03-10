import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const FormSearch = () => {
  return (
    <form className='flex items-center border border-[#DCE3EE] shadow-[0px_30px_50px_rgba(0,0,0,0.08)] p-[10px] pl-[20px] rounded-full'>
        <input 
            type="text"
            name="username"
            placeholder='Search by username'
            className='w-full border-0 outline-0 focus:ring-0 shadow-none' 
        />
        <button className='text-2xl h-[42px] bg-danger transition-all duration-150 ease-linear hover:bg-success hover:shadow-[0px_15px_35px_2px_rgba(0,175,124,0.4)] inline-flex items-center rounded-full px-5 text-white shadow-[0px_15px_35px_2px_rgba(255,108,44,0.4)]'><FiSearch /></button>
    </form>
  )
}

export default FormSearch