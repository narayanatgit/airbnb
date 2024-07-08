import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'
import { useParams } from 'react-router-dom';
const Details = () => {

  const [detail,setdetail]=useState()
  const {id}=useParams()
  const user =JSON.parse(localStorage.getItem("profile"))
  useEffect(()=>
{
       const festch=async()=>
       {
           await axios.get('http://localhost:3000/owner/profile/'+id,{headers: {"Authorization" : `Bearer ${user.Token}`}
          }).then((response)=>
        {
                setdetail(response.data)
                console.log(response.data)
        })
       }
       festch()
},[detail])
if(detail!=null)
{
  return (
    <div>


      <Nav/>
      <div className='flex justify-center'>
    <div className='flex flex-col' > 

        
        <br></br>
        
        <br></br>
      
        <div>
       
        <br></br>
        <div className='flex flex-row'>
        
        <div className='basis-1/3'>  <img
  className=" h-32  w-32 rounded-full object-cover object-center"
  src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
  alt="nature image"
/></div>
<div className='basis-1/3'>
   
</div>

        </div>
       
        </div>

        <br></br>
        
        
        
        <div>
        <b><h1 class="  text-2xl">NAME: {detail.details[0].name.toUpperCase()}</h1></b>
        <br></br>
       
        </div>
 
        <div>
        <b><h1 class="  text-2xl">AGE: {detail.profile[0].age}</h1></b>
        <br></br>
        
        </div>
        
        <div>
        <b><h1 class="  text-2xl">PHONE NUMBER: {detail.profile[0].phoneno}</h1></b>
        <br></br>
        
        </div>
  
  
        <div>
        <b><h1 class="  text-2xl">EMAIL: {detail.details[0].email}</h1></b>
        <br></br>

        </div>

        <div>
        <b><h1 class="  text-2xl">HOBBIES: {detail.profile[0].hobbies}</h1></b>
        <br></br>

        </div>
       
        
        <div>
        <b><h1 class="  text-2xl">INTRESTS: {detail.profile[0].intrests}</h1></b>
        <br></br>

        </div>
        <div>
        <b><h1 class="  text-2xl">SMOKERSTATUS: {detail.profile[0].smoker}</h1></b>
        
      
        </div>
        <br></br>

      
        <br></br>
        </div>
    </div>
    </div>
    
  )}
}

export default Details