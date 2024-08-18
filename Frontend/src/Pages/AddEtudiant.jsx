import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React,{useState} from 'react'

export default function AddEtudiant() {
    const [classe ,setClasse] = useState()
    const handleClasse = (e)=>{
        setClasse(e.target.value)
    }
  return (
   <>
        <div className="addEtudiant-form">
            <div className="form">
                <form action="">
                    <TextField label="Nom" variant="standard"/>
                    <TextField label="Nom" variant="standard"/>
                    <TextField label="Nom" variant="standard"/>
                    <FormControl sx={{width: "100px"}}>
                        <InputLabel>Classe</InputLabel>
                        <Select
                            value={classe}
                            label="Classe"
                            


                        >
                            <MenuItem value="T1">T1</MenuItem>
                            <MenuItem value="T2">T2</MenuItem>
                        </Select>
                    </FormControl>

                </form>
            </div>
        </div>
   </>
  )
}
