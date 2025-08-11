import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import router from './router/router.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve uploads folder as static
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Register API routes BEFORE frontend routes
app.use('/product/api', router);

// Serve frontend static files
app.use(express.static(path.join(__dirname, '/client/dist')));

// Catch-all route for client-side routing (React/Vue/etc)
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname,'/client/dist/index.html'))
// );

const PORT = process.env.PORT || 5000;

// Connect to database before starting server
connectDB();

app.get('/', (req, res) => {
  res.send('khadar');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
