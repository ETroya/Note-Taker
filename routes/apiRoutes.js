const express = require("express");
const fs =require("fs");

const app= express();


app.get("/api/notes", (req,res) => {
fs.readFile("db/db.json", "utf8", (err,data)=>{
    if(err)throw err 
    var newNote =JSON.parse(data)
    res.json(newNote)
})
})

app.post("/api/notes",(req,res)=>{
    var newNote= req.body
    console.log(newNote)
    fs.readFile("/db/db.json", "utf8", (err,data)=>{
        if (err) throw err
        var noteForm=JSON.parse(data)
        noteForm.push(newNote)
        noteForm.forEach((item, i)=> item.id= i +1)
        console.log(noteForm)
    })
} )

app.delete("api/notes/:id", (req,res)=>{
    var emptyNote=req.params.id

    console.log(emptyNote)

    fs.readFile("/db/db.json", "utf8", (err,data)=>{
        console.log("delete")
        if(err)throw err
        var noteDelete= JSON.parse(data)
        var index =parse(emptyNote)-1
        noteDelete.splice(index, 1);

        fs.readFile("/db/db.json", "utf8", (err,data)=>{
            if (err) throw err
            console.log("deleted")
    })
})
    res.json(newNote)
})

module.exports= app;