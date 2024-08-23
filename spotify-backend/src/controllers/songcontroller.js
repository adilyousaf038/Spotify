import {v2 as cloudinary} from 'cloudinary';
import songModel from '../models/songModel.js';
const addSong = async (req,res) => {

    try{
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];
        const audioupload = await cloudinary.uploader.upload(audioFile.path, {resource_type:"video"});
        const imageupload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});
        const duration = `${Math.floor(audioupload.duration/60)}:${Math.floor(audioupload.duration%60)}`

        const songData = {
            name,
            desc,
            album,
            image: imageupload.secure_url,
            file: audioupload.secure_url,
            duration
        }

        const song = songModel(songData);
        await song.save();

        res.json({success:true,message:"Song Added"})

    }catch(error){
       res.json({success:false,message:error})
    }

}

const listSong = async (req,res) => {
    try {
        const allSongs = await songModel.find();
        res.json({success:true,songs:allSongs});        
    } catch (error) {
        res.json({success:false,message:error})        
    }

}

const removeSong = async (req,res) => {
    try {
        
        await songModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Song Removed"})

    } catch (error) {

        res.json({success:false,message:error})
        
    }

}

export { addSong, listSong, removeSong }