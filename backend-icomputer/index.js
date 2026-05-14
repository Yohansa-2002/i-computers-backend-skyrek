import express from "express"
import mongoose from "mongoose"
import userRouter from "./routers/userRouter.js"    
import dns from "node:dns";
import productRouter from "./routers/productRouter.js";
dns.setServers(["1.1.1.1","8.8.8.8"]);


const app = express()

const mongodbURI = process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb+srv://admin:admin123@cluster0.kk4wvgj.mongodb.net/?appName=Cluster0"

mongoose.connect(mongodbURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message || err);
        console.error("Please verify your Atlas URI credentials in MONGODB_URI or MONGO_URI.");
        process.exit(1);
    });

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
