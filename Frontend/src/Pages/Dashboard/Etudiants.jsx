import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, TextField } from '@mui/material'
import { FaUserPlus,FaUserMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Etudiants() {
  const [etudiants,setEtudiants] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const afficheParPage = 5
  const IndexdernierAffihcer = currentPage * afficheParPage
  const IndexPemierAfficher = IndexdernierAffihcer - afficheParPage
  const currentAffiche = etudiants.slice(IndexPemierAfficher,IndexdernierAffihcer)
  const handleNextpage = ()=>{
    if(currentPage < Math.ceil(etudiants.length / afficheParPage)){
      setCurrentPage(currentPage+1)
    }
  }
  const handlePrevPage = ()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage-1)
    }
  }
    
    useEffect(()=>{
      axios.get("http://localhost:6001/api/etudiant/nbrEtudiant")
      .then(res=>{
        console.log(res.data.etd)
        setEtudiants(res.data.etd)
      }).catch(err=>{
        console.log(err)
      })
    },[])

      
     
        
        
    
   
  return (
    <>
      <div className="listeDesEtudiant">
        <div className="addEtudiant">
            <div className='titre-list'>
              <h4>Listes de touts les etudiant:</h4>
            </div>
            <div className='add'>
              <Link to="/dashboard/etudiant/add" className='add-etd'>
                <FaUserPlus className='etd-btn'/>
                <span className='add-title'>Ajouter un etudiant</span>
              </Link>
           
             
            </div>
            <div className="search-Etudiant">
              <TextField label="Rechercher un étudiant" variant="standard"/>
            </div>
        </div>
        <div className="listeEtudiant">
            {
              currentAffiche.map((etudiant,index)=>{
                return(
                  <div key={index} className='etudiant'>
                      <h5>{etudiant.nom}</h5>
                      <h5>{etudiant.dateDeNaissance}</h5>
                      <h5>{etudiant.classe}</h5>
                  </div>
                )
              })
            }
            <div>
              <button onClick={handlePrevPage} disabled={currentPage==1}> Precedent</button>
              <button onClick={handleNextpage} disabled={currentPage==Math.ceil(etudiants.length / afficheParPage)}> Suivant</button>
            </div>
        </div>
      </div>
    </>
  )
}
