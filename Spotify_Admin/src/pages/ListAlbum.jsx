import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { FaTrash } from "react-icons/fa";
import { url } from '../App';


const ListAlbum = () => {
  
  const [data,setData] = useState([]);

  const fetchAlbums = async () => {


    try {
      const response = await axios.get(`${url}/api/album/list`);
      if(response.data.success){
        setData(response.data.albums)
      }
    } catch (error) {
      toast.error(error)
    }

    
  }

  const deleteAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`,{id});
      if(response.data.success){
        toast.success(response.data.message);
       await fetchAlbums();
      }
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    fetchAlbums()
  },[])

  return (
    <div>
      <p className='text-2xl font-bold mb-4'>All Albums List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[1fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-[#333] text-white'>
             <b>Image</b>
             <b>Name</b>
             <b>Description</b>
             <b>Album Colour</b>
             <b>Action</b>
        </div>
        {data.map((item,index)=>{
          return(
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
              <img className='w-20 rounded' src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColour} />
              <p onClick={()=>deleteAlbum(item._id)} className='cursor-pointer text-red-500'><FaTrash /></p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default ListAlbum
