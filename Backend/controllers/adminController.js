
import { AdminSchema } from "../models/adminModel.js";
import errorHandler from "../error/error.js";

export const adminRegister = async(req,res,next)=>{
    const {nom,prenom,email,nomEcole,phone,password} = req.body
   
    if(!nom || !prenom || !email || !phone || !password){
        return next(new errorHandler("Veuillez completer le formulaire de reservation",400)) 
    }
    try {
        const existUser = await AdminSchema.findOne({email: email})
        if(existUser)
            return next(new errorHandler("Email déja utiliser pour une compte"),400)
        await AdminSchema.create({nom,prenom,email,nomEcole,phone,password})
        res.status(201).json({
            success: true,
            message: "Inscription reussi",
            data
        })

    } catch (error) {
        if(error.name == "ValidationError"){
            const ValidatorError = Object.values(error.errors).map(err=>err.message)

            return next(new errorHandler(ValidatorError.join(" ,"),400))
        }
       
    }

}
export const adminLogin = async (req,res,next) =>{
    const {email,password} = req.body
    if(!email || !password) 
        return next(new errorHandler("Veillez remplir le formulaire"))
    try {
        const user = await AdminSchema.findOne({email:email})
        if(!user) return next(new errorHandler("L'email n'est associé a auccun compte"),400)
        if(password != user.password) return next(new errorHandler("Mot de passe incorrecte"),400)
        return res.status(201).json({
            success: true,
            message: "Login reussi",
            user
        })
    } catch (error) {
        if(error.name == "ValidationError"){
            const ValidatorError = Object.values(error.errors).map(err=>err.message)

            return next(new errorHandler(ValidatorError.join(" ,"),400))
        }
    }
}