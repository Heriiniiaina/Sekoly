import { etudiantSchema } from "../models/etudiantModel.js";
import errorHandler from "../error/error.js";
import multer from "multer";
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"uploads/")
    }
})
export const upload = multer({storage: storage}) 
export const etudiantRegister = async (req,res,next)=>{
    const {nom,prenom,dateDeNaissance,classe} = req.body
    if(!nom || !prenom || !dateDeNaissance || !classe)
        return next(new errorHandler("Veuillez remplir le formulaire",400))
    try {
        const ListeEtudiant = await etudiantSchema.find({classe})
        const numero = ListeEtudiant.length +1
        await etudiantSchema.create({nom,prenom,dateDeNaissance,classe,numero})
        return res.status(200).json({
            success: true,
            message: "Inscription reussie"
        })
    } catch (error) {
        if(error.name == "ValidationError"){
            const ValidatorError = Object.values(error.errors).map(err=>err.message)
            return next(new errorHandler(ValidatorError.join(", "),400))
        }
    }
}

export const getNombreEtudiant = async (req,res,next)=>{
    try {
         const etd = await etudiantSchema.find({})
         return res.status(200).json({
            success: true,
            message: `Etudiant: ${etd.length}`,
            etd
         })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "No etudiant"
        })
    }
}