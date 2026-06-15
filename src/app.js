const express = require('express');
const notModel = require("./models/note.model")

const app = express();
app.use(express.json());


app.post("/notes", async(req,res) => {
    const data = req.body
     await notModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"Note created"
    })
})


   app.get('/notes', async (req, res) => {

    const note = await notModel.find()

    res.status(200).json({
        message: "Note fetched successfully",
        note
    });

});

app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id;

    await notModel.findOneAndDelete({
        _id: id
    });

    res.status(200).json({
        message: "Note deleted successfully"
    });
});

app.patch("/notes/:id", async (req,res) => {

    const id = req.params.id
    const description = req.body.description

    await notModel.findOneAndUpdate(
        {_id:id},
        {description: description}
    )

    res.status(200).json({
        message:"Note updated successfully"
    })
})










module.exports=app