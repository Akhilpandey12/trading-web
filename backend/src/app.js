const express = require('express');
const cors =require('cors')
const dotenv = require('dotenv');
const cookieParser=require('cookie-parser')
const connectToDb = require('./config/db');
const authRoutes = require('./routes/authRoutes');


dotenv.config(); 

const app = express();


connectToDb();



app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






app.use('/api', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

module.exports = app;
