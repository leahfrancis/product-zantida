import React, { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {auth} from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Login from './login';
const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
           await createUserWithEmailAndPassword(auth,email,password)
            console.log("Acc created")
            

        }catch(err)
        {
            console.log(err)
        }
    }
  return (
  <div className='signup-container'>
    <form className='signup-form' onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <label htmlFor="name" className="heading" >
            Name:
        </label><br/>
        <input type="text" onChange={(e)=>setName(e.target.value)} /><br/>
        <label htmlFor="email" className="heading">
            Email:
        </label><br/>
        <input type="text" onChange={(e)=>setEmail(e.target.value)}  /><br/>
        <label htmlFor="password" className="heading">
            Password:
        </label><br/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <label htmlFor="mobile" className="heading" >
            Mobile No:
        </label><br/>
        <input type="text" /><br/><br/>
<button className='signup' type='submit' onClick={()=>alert("ACCOUNT CREATED")}>SignUp</button>
<p>Already Registered? <Link to="/login">Login</Link></p>
    </form>
  </div>
  )
}

export default Signup