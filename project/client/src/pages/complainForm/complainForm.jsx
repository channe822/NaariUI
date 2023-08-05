import React from 'react'
import Navbar from "../../components/Navbar"
import axios from "axios";
import "./complainForm.css";



export default function ComplainForm() {

  const handleClick1=event=>{
    window.location.replace("/counsellor")
  }
  const handleClick2=event=>{
    window.location.replace("/multiForm")
  }

  return (
    
    <div className="bgimg" >
      <div>
       <div id="banner">
        <h1 className='h1'>EACH TIME A WOMAN STANDS UP FOR HERSELF SHE STANDS UP FOR ALL WOMEN !!!</h1>
        <div className='btn-c'>
        <button className="GFG buttonc" onClick={handleClick1}>Opt For Counselling</button>
            <button className="GFG buttonc" onClick={handleClick2}>
                Raise your complain
            </button>
            </div>
    </div>
    </div>
    </div>
    
  )
}
