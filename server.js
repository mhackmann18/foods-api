const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const foods = require('./routes/foods');

const app = express();

var cors = require('cors')
app.use(cors())

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
