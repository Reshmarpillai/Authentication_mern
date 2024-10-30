const express = require("express");
const mongoose = require("mongoose");

const app =express();
const PORT= 5000;

app.get("/", (req,res)=>{
    console.log("Server started")
})

app.listen(PORT,()=>console.log(`server running at the port ${PORT}`))
