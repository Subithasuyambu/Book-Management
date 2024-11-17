import express, { request, response } from "express";

import {PORT,mongoDBURL} from "../backend/config.js";
import mongoose from 'mongoose';

import booksRoute from './routes/bookRoute.js';
import cors from'cors';


const app=express();
 app.use(cors());
// app.use(
//     cors({
//         origin:'http://locahost:3000',
//         method:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],

//     })
// )
 
app.use(express.json())
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome to meanstack tutorial');

});
app.use('/books',booksRoute);


  
  

mongoose
.connect(mongoDBURL)
.then(()=>{
  console.log('App connected to database');
  app.listen(PORT,()=>{
    console.log(`App is listening to port:${PORT}`);
});
})
.catch((error)=>{
console.log(error);
});                           