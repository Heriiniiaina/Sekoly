import mongoose from "mongoose"

const etudiantModel = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    dateDeNaissance:{
        type: String,
        required: true
    },
    classe: {
        type: String,
        required: true
    },
    numero:{
        type: Number,
        required: true
    },
    photoIdentite:{
        type: String,
        require: true
    }
})

export const etudiantSchema = mongoose.model("Etudiants",etudiantModel)