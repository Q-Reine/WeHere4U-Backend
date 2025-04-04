import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mainRouter from './Routes/indexRouting.js';

import bodyParser from 'body-parser';


dotenv.config();
const port =process.env.PORT||3000
const db_user =process.env.DB_USER;
const db_name =process.env.DB_NAME;
const db_pass =process.env.DB_PASS;



const app=express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://we-here4-u-2.vercel.app/'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())
app.use('/', mainRouter);
app.use(bodyParser.json());

const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.copwq.mongodb.net/${db_name}`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
     
    });
  })
  .catch((error) => {
    console.log(error);
  });