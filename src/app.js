// this file creat server
const express = require("express")

const app = express()
app.use(express.json())

const notes =[]
/*tittle , description */
/*POST /notes*/
app.post('/notes',(req,res) =>{
    notes.push(req.body)
    res.status(201).json({
        message:"note created successfully"
    })

    console.log(req.body) 
})

/*GET /notes*/
app.get('/notes',(req, res) =>
[
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes

    })
])
/*delete /notes/1*/
app.delete('/notes/:index',(req, res) =>{
    const index = req.params.index
    delete notes[index]
    
    res.status(200).json({
        message:"note deleted successfully"
    })

})

app.patch("/notes/:index",(req,res) =>{
    const index =req.params.index
    const description =req.body.description

    notes[ index ].description =description
    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports =app
