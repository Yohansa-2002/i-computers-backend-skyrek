import express from "express"
import mongoose from "mongoose"
import userRouter from "./routers/userRouter.js"    
import dns from "node:dns";
import productRouter from "./routers/productRouter.js";
dns.setServers(["1.1.1.1","8.8.8.8"]);


const app = express()

const mongodbURI = "mongodb+srv://admin:1234@cluster0.kk4wvgj.mongodb.net/?appName=Cluster0"



mongoose.connect(mongodbURI).then(
    ()=>{
        console.log("Connected to MongoDB");
    }
)

app.use(express.json())

app.use(
    (req, res, next)=>{

        const header = req.header("Authorization")
        console.log(header)
        next()

    }
)

app.use("/users",userRouter)
app.use("/products",productRouter)

app.delete("/", ()=>{
    console.log("Delete Request received")
})

app.put("/", ()=>{
    console.log("put Request received")
})

//app.listen(3000,go)

app.listen(3000, ()=>{console.log("server is running on port 3000")})
