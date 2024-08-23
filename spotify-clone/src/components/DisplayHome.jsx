import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import Footer from "./Footer";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {

  const {songsData, albumsData} = useContext(PlayerContext);


  return (
    <>
      <Navbar />
      <div className="mb-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="my-5 font-bold text-white text-2xl hover:underline ease-in-out duration-7 cursor-pointer">
            Featured Charts
          </h1>
          <p className="text-sm text-neutral-500 font-medium cursor-pointer hover:underline ease-in-out duration-7">
            Show all
          </p>
        </div>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-white text-2xl hover:underline ease-in-out duration-7 cursor-pointer">
          Today's biggest hits
        </h1>
        <div className="flex overflow-auto overflow-x-scroll">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplayHome;
