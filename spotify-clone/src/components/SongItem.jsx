import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import PlayBtn from './PlayBtn'

const SongItem = ({name,image,desc,id}) => {
  const {playWithId} = useContext(PlayerContext)


  return (
    <div onClick={()=>playWithId(id)} className='min-w-[150px] p-1 px-2 rounded group cursor-pointer hover:bg-[#ffffff26] ease-in-out duration-100 relative'>
        <div className="w-full h-auto relative">
        <img className='rounded' src={image} width={150}  alt="" />
        <PlayBtn/>
        </div>
        <p className='font-bold mt-2 mb-1 text-white'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
      
    </div>
  )
}

export default SongItem
