import React, { useState,useEffect } from 'react'
import front from './front.jpeg'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

const Signup = () => {

  const [user,setuser]=useState(null)
  const [name,setname]=useState('')
  
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')

const navigate=useNavigate()

  const handleclick=async()=>
  {

       

          
                      await axios.post('http://localhost:3000/register',{name:name,email:email,password:password}).then((resposne)=>
                    {
                         localStorage.setItem('profile',JSON.stringify(resposne.data))
                         navigate('/profile')
                    })
         
  }


  return (
<div class="  grid   sm:grid-cols-12  ">
    <div class="  sm:col-span-4 "  >
     <div >
     <img src={front} alt="" class="h-screen w-screen"/>
     </div>
       
    </div>
    <div class="  sm:col-span-8 " > 
   
               <div  class=""  >
                 <div class=" pt-8 pr-3 sm: flex justify-end ">
                  <b>Already a member? </b> <Link to='/signin' class="text-blue-500">Sign in</Link>
                 </div>
                 <div class="px-32 py-30">
                 <b><h1 class="  text-2xl">Signup up to Dribbble</h1></b> 
               <br></br>
               <div class="flex " >
               <div class="flex-auto">
               <b><label>Name</label></b>
               <br></br>
               <input type='text' class="border border-black  rounded focus:outline-none" style={{width:"83%"}}  onChange={(e)=>{setname(e.target.value)}}required />
               </div>
               <div class="flex-auto">
              
               <br></br>
             
               </div>
               </div>
               <br></br>
               <b><label>Email</label></b>
               <br></br>
               <input type='email' class="border border-black  rounded focus:outline-none"  style={{width:"56%"}} onChange={(e)=>{setemail(e.target.value)}} required/>
               <br></br>
               <br></br>
               <b><label>Password</label></b>
               <br></br>
               <input type='password' class="border border-black  rounded focus:outline-none" style={{width:"56%"}} onChange={(e)=>{setpassword(e.target.value)}}placeholder='6+ characters' required/>
               <br></br>
               <br></br>
               <div>
                <input type='checkbox'/><span class='text-gray-500'>Creating an account means you're okay with our <span className=' text-indigo-800'>Terms of</span><br></br> <span className=' text-indigo-800'>Service,Privacy Policy, </span>and our default <span className=' text-indigo-800'>Notification Settings</span> </span>
               </div>
               <br></br>
                              <div>
                <button class="bg-pink-600 w-52 h-30 py-2 text-white rounded-xl" onClick={handleclick}>Create Account</button>
               </div>
               <br></br>
               
               <span class='text-gray-500 text-xs'>This site is protected by reCAPTCHA and the Google  <br></br><span className=' text-indigo-800'>Privacy Policy </span> and <span className=' text-indigo-800'>Terms of Service </span>apply</span>
                 </div>
              
              
               </div>
    </div>
  </div>
    
  )
}

export default Signup