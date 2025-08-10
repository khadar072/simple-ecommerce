import React from 'react'
import { FaPlus } from "react-icons/fa";
import { LuSunMedium } from 'react-icons/lu';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='h-20 flex flex-row items-center justify-between text-blue-400 w-["1430px"]  px-28'>
      <h2 className='text-6xl text-white font-bold'>khadar</h2>
      <div className='flex flex-row gap-2'>
        <Link to={'create'}>
          <button className='border bg-gray-200 cursor-pointer px-5 py-4 rounded'>
            <FaPlus />
          </button>
        </Link>
        <button className='border bg-gray-200 cursor-pointer px-5 py-3 rounded'>
          <LuSunMedium size={20} />
        </button>
      </div>
    </div>
  )
}

export default Navbar
