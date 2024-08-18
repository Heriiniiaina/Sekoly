import express from "express";
import { etudiantRegister, getNombreEtudiant ,upload} from "../controllers/etudiantController.js";
const router = express.Router()

router.post("/register",upload.single("image"),etudiantRegister)

router.get("/nbrEtudiant",getNombreEtudiant)
export default router