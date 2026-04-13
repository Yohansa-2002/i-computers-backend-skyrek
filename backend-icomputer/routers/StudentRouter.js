import express from "express";
import Student from "../models/student.js";

const StudentRouter = express.Router();

StudentRouter.get("/",(req,res)=>{

    Student.find().then(

        (Students)=>{

            res.json(Students)
        }
    )
})

StudentRouter.post("/", (req,res)=>{
    
    const newStudent = new Student({
        name:req.body.name,
        age:req.body.age,
        city:req.body.city
    })

    newStudent.save().then(
        ()=>{
            res.json({
                message:"Student Created Successfully"
            })
        }
    )

})

export default StudentRouter;

    