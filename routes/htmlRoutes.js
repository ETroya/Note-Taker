const express = require("express");
const path =require("path")

const app= express()
app.get("/public/notes.html", (req,res)=>{
    res.sendFile(path.join(_dirname, "/public/notes.html"))
});

app.get("*",(req,res)=>{
    res.sendFile(path.join(_dirname, "/public/index.html"))
})

module.exports = app;