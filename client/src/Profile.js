import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Profile = () => {

    const user =JSON.parse(localStorage.getItem("profile"))
    const [image,setimage]=useState()
    const [phno,setphno]=useState()
    const [age,setage]=useState()
    const [hobbies,sethobbies]=useState()
    const [intrests,setintrests]=useState()
    const [smoker,setsmoker]=useState()
    const navigate=useNavigate()
    const handleclick=async()=>
    {
        
             await axios.post('http://localhost:3000/profile',{imageurl:"xyz",phno:phno,age:age,hobbies:hobbies,intrests:intrests,smokerstatus:smoker},{ headers: {"Authorization" : `Bearer ${user.Token}`} }).then(
                        
                   (response)=>
                   {   
                            navigate('/home')
                   }
             )

    }
  return (
    <div>
        <Nav/>
        <div className='flex justify-center'>
    <div className='flex flex-col' > 

        <div class=' '>
            <b><h1 class="  text-4xl">Welcome! Let's create your profile  </h1></b>
        </div>
        <br></br>
        <div class=''>
            <h4 class= ' text-gray-600 text-lg' >Let others get to know you better! You can do these later</h4>
        </div>
        <br></br>
      
        <div>
        <b><h1 class="  text-2xl">Add an avatar</h1></b>
        <br></br>
        <div className='flex flex-row'>
        
        <div className='basis-1/3'>  <img
  className=" h-36  w-36 rounded-full object-cover object-center"
  src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
  alt="nature image"
/></div>
<div className='basis-1/3'>
    <div className='flex flex-col'>
        <div>
<label for="file-upload" class="bg-white  border-4 py-2 px-3 rounded">
        <span id="file-label"><b>Choose image</b></span>
        </label>
        <input id="file-upload" type="file" class="hidden"  /></div>
        <br></br>
        <div>
        <h6 className='text-sm text-gray-600'>Or choose one of our default</h6>
        </div>
        
        </div>
</div>

        </div>
       
        </div>

        <br></br>
        
        
        
        <div>
        <b><h1 class="  text-2xl">Add your phone number</h1></b>
        <br></br>
        <input type='number' placeholder='Enter phonenumber ' onChange={(e)=>{setphno(e.target.value)}}/>
        </div>
        <br></br>
        <div>
        <b><h1 class="  text-2xl">Add your age</h1></b>
        <br></br>
        <input type='number' placeholder='Enter the age' onChange={(e)=>{setage(e.target.value)}}/>
        </div>
        <br></br>
        <div>
        <b><h1 class="  text-2xl">Add your Hobbies</h1></b>
        <br></br>


        <input type='text' placeholder='Enter the hobbies' onChange={(e)=>{sethobbies(e.target.value)}}/>
        </div>
        <br></br>
        <div>
        <b><h1 class="  text-2xl">Add your Intrests</h1></b>
        <br></br>
        <input type='text' placeholder='Enter the intrests' onChange={(e)=>{setintrests(e.target.value)}}/>
        </div>
        <br></br>

        <div>
        <b><h1 class="  text-2xl"> your smokerstatus</h1></b>
        <br></br>
       <select onChange={(e)=>{setsmoker(e.target.value)}}><option value="">Select the option</option><option value="yes">Yes</option><option value="no">No</option></select>
        </div>
        <br></br>

        <div>
            <button class="bg-pink-600 w-56 h-30 py-2 text-white rounded-xl" onClick={handleclick}>Next</button>
        </div>
        <br></br>
        </div>
    </div>
    </div>
    
  )
}

export default Profile