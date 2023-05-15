import express from "express";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import * as dotenv from "dotenv";
dotenv.config();

const app= express();
app.use(cors());
app.use(express.json({"limit":"50mb"}));

app.use("/api/v1/post",postRoutes);
app.use("/api/v1/dalle",dalleRoutes);

app.get("/",async (req,res)=>{
    console.log(process.env.MONGO_URL);
    res.send("Hello From DALL-E!");
    
}
);

const startServer =async ()=>{

    try {
        connectDB(process.env.MONGO_URL);
        app.listen(8080, ()=> console.log("server has started on port http://localhost:8080"))
    } catch (error) {
        console.log(error);
        
    }
    
}
startServer();