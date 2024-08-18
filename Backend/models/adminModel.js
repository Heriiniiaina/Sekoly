import mongoose from "mongoose";
import validator from "validator";

const adminSchema = mongoose.Schema({
    nom:{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Veillez entrer un email valide"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Le numero doit avoir 10 caractères"]
    },

    password:{
        type: String,
        required: true,
        minLength: [8, "Le mot de passe doit avoir au moins 8 caractères!"]
    },
    admin:{
        type: Boolean,
        default: true
    },
    nomEcole:{
        type: String,
        required: true
    }

   

})
export const AdminSchema = mongoose.model("Admin",adminSchema)