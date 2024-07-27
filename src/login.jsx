import React, { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {auth} from './firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
           await signInWithEmailAndPassword(auth,email,password)
            console.log("logged in")
            

        }catch(err)
        {
            console.log(err)
        }
    }
  return (
  <div className='signup-container'>
    <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
       
        <label htmlFor="email" className="heading">
            Email:
        </label><br/>
        <input type="text" onChange={(e)=>setEmail(e.target.value)}  /><br/>
        <label htmlFor="password" className="heading">
            Password:
        </label><br/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <br/><br/>
<button className='login' type='submit' onClick={()=>alert("LOGIN SUCCESSFULL")}>Login</button>
<p>Not Registered? <Link to="/">SignUp</Link></p>
    </form>
  </div>
  )
}

export default Login