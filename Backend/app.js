import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import Admin from "./routes/adminRoute.js"
import Etudiant from "./routes/etudiantRoute.js"
import { dbConnection } from "./db/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import multer from "multer"
const app = express()


app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin:["http://localhost:5173"],
    methods: ["POST"],
    credentials: true
}))
app.use(express.json())
dotenv.config({path: "./config/config.env"})
// Upload image

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"uploads/")
    }
})
app.use("/api/admin",Admin)
app.use("/api/etudiant",Etudiant)
app.use(errorMiddleware)
dbConnection()
export default app