const express = require('express');
const studentModel = require('../models/studentModel');
const route = express.Router();

route.get("/students",async (req,res) =>{
    try{
        const data = await studentModel.find();
        res.json(data)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

route.get("/students/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const data = await studentModel.findById(id);
        res.json(data)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

route.post("/students",async (req,res) =>{
    const data = new studentModel({
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade
    })
    try{
        const savedData = await data.save();
        res.status(200).json(savedData)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

route.patch("/students/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new:true};
        const result = await Model.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    } catch(error){
        res.status(400).json({message: error.message})
    }
})

route.delete("/students/:id",async (req,res) =>{
    try{
        const delData = await Model.findByIdAndRemove(req.params.id)
        res.send(delData);
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = route;