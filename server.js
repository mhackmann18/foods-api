import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config({ path: './config/config.env' });

connectDB();

import foods from './routes/foods.js';

const app = express();

import cors from 'cors';
app.use(cors());

// Body Parser
app.use(express.json());

if(process.env.NODE_ENV === "development")
  app.use(morgan('dev'));

app.use('/api/v1/foods', foods);

const PORT = process.env.PORT;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle promise rejections 
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
