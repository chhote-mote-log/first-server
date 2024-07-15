import express from "express";
// const express = require('express');
import 'dotenv/config'
// require('dotenv').config()
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Hel WOrld");
})
app.get('/login',(req,res)=>{
    res.send("Hello WOrld");
})
app.listen(process.env.PORT,()=>{
    console.log(`Example App Listening on ${PORT}`);
})