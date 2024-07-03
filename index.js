import express from "express";
import mongoose from "mongoose";

const app = express();

const port = 3000;

app.use(express.json())

const mongoUrl="mongodb+srv://harshalhonde17:harshal172003@cluster0.b0mwyen.mongodb.net/Blogs?retryWrites=true&w=majority"

mongoose.connect(mongoUrl).then(() => {
    console.log("Connected to MongoDB..")
}).catch((err) => {
    console.error("Error here !!!",err)
})

app.get('/api/get-message',(req,res) => {
    res.json({message:"Isha here"});
})

app.listen(port,()=> {
    console.log("server is running......", port)
})
    