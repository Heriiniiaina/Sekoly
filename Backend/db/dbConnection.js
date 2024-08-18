import mongoose from "mongoose";

export const dbConnection = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected")
    } catch (error) {
        console.log("Erreur connexion database => " + error)
    }
}