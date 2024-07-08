import React, { useState } from 'react'
import front from './front.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {


  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const navigate=useNavigate()
  const handleclick=async()=>
  {
    
             await axios.post('http://localhost:3000/login',{email,password}).then((response)=>
            {
                  console.log(response.data)
               localStorage.setItem('profile',JSON.stringify(response.data))
               navigate('/home')
              
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
                
                 <div class="px-32 py-32">
                 <b><h1 class="  text-2xl">Signin up to Dribbble</h1></b> 
               <br></br>
               
             
               <b><label>Email</label></b>
               <br></br>
               <input type='email' class="border border-black  rounded focus:outline-none"   onChange={(e)=>{setemail(e.target.value)}} style={{width:"56%"}} required/>
               <br></br>
               <br></br>
               <b><label>Password</label></b>
               <br></br>
               <input type='password' class="border border-black  rounded focus:outline-none"  onChange={(e)=>{setpassword(e.target.value)}} style={{width:"56%"}}    placeholder='6+ characters' required/>
               <br></br>
               <br></br>
               <div>
                <input type='checkbox'/><span class='text-gray-500'>Creating an account means you're okay with our <span className=' text-indigo-800'>Terms of</span><br></br> <span className=' text-indigo-800'>Service,Privacy Policy, </span>and our default <span className=' text-indigo-800'>Notification Settings</span> </span>
               </div>
               <br></br>
                              <div>
                <button class="bg-pink-600 w-52 h-30 py-2 text-white rounded-xl" onClick={handleclick}>Signin</button>
               </div>
               <br></br>
               
               <span class='text-gray-500 text-xs'>This site is protected by reCAPTCHA and the Google  <br></br><span className=' text-indigo-800'>Privacy Policy </span> and <span className=' text-indigo-800'>Terms of Service </span>apply</span>
                 </div>
              
              
               </div>
    </div>
  </div>
  )
}

export default Login