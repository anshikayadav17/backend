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

module.exports =app
