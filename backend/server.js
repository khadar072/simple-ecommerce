import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/db.js';
import router from './router/router.js';
import path from 'path'
import { fileURLToPath } from 'url';





const app=express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use(cors())

// Register routes BEFORE listen
app.use('/product/api', router);

app.use("/upload", express.static("upload"));


const PORT = process.env.PORT || 5000;

connectDB();

app.get('/', (req, res) => {
  res.send('khadar');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
