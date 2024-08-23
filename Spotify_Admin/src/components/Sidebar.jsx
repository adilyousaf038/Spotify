import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { IoIosMusicalNotes } from "react-icons/io";
import { TbMusicPlus } from "react-icons/tb";
import { RiFolderMusicFill } from "react-icons/ri";
import { RiAlbumFill } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className='bg-[#333] min-h-screen pl-[4vw]'>
      
        <img src={assets.logo} className='mt-5 w-[max(10vw,100px)] hidden sm:block' alt="" />
        <img src={assets.logo_small} className='mt-5 w-[max(5vw,40px)] sm:hidden block' alt="" />      

        <div className='flex flex-col gap-5 mt-10'>

            <NavLink to='/add-song' className='flex items-center  gap-2.5 text-white hover:bg-gray-700  rounded-s-2xl  p-2 pr-[max(8vw,10px)]  text-sm font-medium'>
               
                <TbMusicPlus className='w-5 h-5' />
                <p className='hidden sm:block font-semibold'>Add Song</p>
            </NavLink >

            <NavLink to='/list-song' className='flex items-center gap-2.5 text-white hover:bg-gray-700   rounded-s-2xl p-2 pr-[max(8vw,10px)]  text-sm font-medium'>
               
                <IoIosMusicalNotes  className='w-5 h-5' />
                <p className='hidden sm:block font-semibold'>List Song</p>
            </NavLink>

            <NavLink to='/add-album' className='flex items-center gap-2.5 text-white hover:bg-gray-700   rounded-s-2xl p-2 pr-[max(8vw,10px)]  text-sm font-medium'>
             
                <RiFolderMusicFill className='w-5 h-5' />
                <p className='hidden sm:block font-semibold'>Add Album</p>
            </NavLink>

            <NavLink to='/list-album' className='flex items-center gap-2.5 text-white hover:bg-gray-700  rounded-s-2xl p-2 pr-[max(8vw,10px)]  text-sm font-medium'>
              
                <RiAlbumFill className='w-5 h-5' />
                <p className='hidden sm:block font-semibold'>List Album</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar
