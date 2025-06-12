const express = require('express');
const cors =require('cors')
const dotenv = require('dotenv');
const cookieParser=require('cookie-parser')
const connectToDb = require('./config/db');
const authRoutes = require('./routes/authRoutes');


dotenv.config(); 

const app = express();


connectToDb();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send("Hey, server is working!");
});

app.post('/test',(req,res)=>{
    res.send("heyyyyyyyyy")
})


app.use('/', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

module.exports = app;
