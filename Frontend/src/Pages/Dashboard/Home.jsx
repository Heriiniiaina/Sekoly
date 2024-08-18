import React,{useState} from 'react'
import totalStudent from "../../assets/img1.png"
import totalClasse from "../../assets/img2.png"
import teacher from "../../assets/img3.png"
import fees from "../../assets/img4.png"
import axios from 'axios'

export default function Home() {
    const [etudians,setEtudiants] = useState(0)
    const [classes,setClasses] = useState(0)
    const [profs,setProfs] = useState(0)
    const [money,setMoney] = useState(0)
    axios.get("http://localhost:6001/api/etudiant/nbrEtudiant").then(res=>setEtudiants(res.data.etd.length)).catch(err=>{
        console.log(err)
    })
  return (
    <>
        <div className="dashboard-home">
            <div className='dashboard-data'>
                <div className='total-students'>
                    <img src={totalStudent} alt="" />
                    <h4>Total etudians</h4>
                    <h5>{etudians}</h5>
                </div>
                <div className='total-classe'>
                     <img src={totalClasse} alt="" />
                     <h4>Total classes</h4>
                     <h5>{classes}</h5>
                </div>
                <div className='teacher'>
                    <img src={teacher} alt="" />
                    <h4>Profs</h4>
                    <h5>{profs}</h5>
                </div>
                <div className="total-fees">
                    <img src={fees} alt="" />
                    <h4>Total argent</h4>
                    <h5>{money}</h5>
                </div>
            </div>
            <div className='Notification'>

            </div>
        </div>
    </>
  )
}
