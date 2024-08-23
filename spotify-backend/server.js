import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoutes.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoutes.js';

//app config
const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());
connectDB();
connectCloudinary();


//initializing routes
app.use("/api/song",songRouter);
app.use("/api/album",albumRouter);

app.get('/', (req, res) => {
    res.send('API is Working')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })