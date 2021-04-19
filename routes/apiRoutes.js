const express = require("express");
const fs =require("fs");
const app= express();

app.get("/notes", (req,res) => {
fs.readFile("db/db.json", "utf8", (err,data)=>{
    if(err)throw err 
    var newNote =JSON.parse(data)
    res.json(newNote)
})
})

app.post("/notes",(req,res)=>{
    var newNote= req.body
    console.log(newNote)
    fs.readFile("db/db.json", "utf8", (err,data)=>{
        if (err) throw err
        var noteForm=JSON.parse(data)
        noteForm.push(newNote)
        noteForm.forEach((item, i)=> item.id= i +1)
        console.log(noteForm)

        fs.writeFile("db/db.json", JSON.stringify(noteForm), "utf8", (err)=>{
            if (err) throw err
    })
    })
    res.json(newNote)
} )

app.delete("/notes/:id", (req,res)=>{
    var emptyNote=req.params.id
    console.log(emptyNote)

    fs.readFile("db/db.json", "utf8", (err,data)=>{
        
        if(err)throw err
        var noteDelete= JSON.parse(data)
        var index = parseInt(emptyNote)-1
        noteDelete.splice(index, 1);

        fs.writeFile("db/db.json", JSON.stringify(noteDelete), "utf8", (err,data)=>{
            if (err) throw err
    })
})
    res.json(emptyNote)
})

module.exports= app;