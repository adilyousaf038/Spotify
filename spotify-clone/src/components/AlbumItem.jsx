import React from "react";
import { useNavigate } from "react-router-dom";
import PlayBtn from "./PlayBtn";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[150px] p-1 px-2 rounded group cursor-pointer hover:bg-[#ffffff26] ease-in-out duration-100 relative"
    >
      <div className="w-full h-auto bg-cov relative">
        <img className="rounded-full " src={image} width={150} alt="" />
        <PlayBtn />
      </div>

      <p className="font-bold mt-2 mb-1 text-white">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;
