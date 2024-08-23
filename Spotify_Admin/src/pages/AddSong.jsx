import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

const AddSong = () => {
  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("audio", song);
      formData.append("album", album);

      const response = await axios.post(`${url}/api/song/add`, formData);

      if (response.data.success) {
        toast.success("Song Added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(error);
    }
    setLoading(false);
  }

  const loadAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setAlbumData(response.data.albums);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    loadAlbumData();
  }, []);

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-start gap-8 text-gray-600 "
    >
      <div className="flex gap-8 ">
        <div className="flex flex-col  gap-3 items-center">
          <p className="font-semibold">Upload Song</p>

          <input
            onChange={(e) => setSong(e.target.files[0])}
            type="file"
            id="song"
            accept="audio/*"
            hidden
          />
          <label htmlFor="song">
            <img
              src={song ? assets.upload_added : assets.add_song}
              className="w-10 h-10 cursor-pointer"
              alt=""
            />
          </label>
        </div>

        <div className="flex  flex-col  gap-3 items-center">
          <p className="font-semibold">Upload Image</p>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            accept="image/*"
            hidden
          />

          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-10 h-10 cursor-pointer"
              alt=""
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <p className="font-semibold">Song Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="bg-transparent outline-gray-400 border-2 border-ray-400 p-2.5 w-[max(30vw,250px)]"
          placeholder="Type Here"
          required
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p className="font-semibold">Song Description</p>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          type="text"
          className="bg-transparent resize-none outline-gray-400 border-2 border-ray-400 p-2.5 w-[max(30vw,250px)]"
          placeholder="Type Here"
          required
        />
      </div>

      <div className="flex  gap-2.5 items-center">
        <p className="pr-3 font-semibold">Album</p>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          defaultValue={album}
          className="bg-transparent outline-gray-400 border-2 border-ray-400 p-2.5 "
        >
          <option value="none">None</option>
          {albumData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button className="text-base bg-black text-white py-2.5 px-14 cursor-pointer w-[max(30vw,250px)] hover:bg-slate-800">
        ADD
      </button>
    </form>
  );
};

export default AddSong;
