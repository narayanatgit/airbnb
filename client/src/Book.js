import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Nav from './Nav'
import axios from 'axios'
import home from './assests/home.png'
import { useNavigate } from 'react-router-dom';
const Book = () => {

  const [deatails,setdetails]=useState(null)
  var ami=[]
  const { id, checkindate, checkoutdate } = useParams();
 
  const checkInDate = new Date(checkindate);
  const checkOutDate = new Date(checkoutdate);
   const  time= checkOutDate-checkInDate
   var month=time/(1000 * 60 * 60 * 24 * 30)
              month=Math.round(month)
  const user =JSON.parse(localStorage.getItem("profile"))
  const navigate=useNavigate()
    useEffect(()=>
  {
    const fetchData = async () => {

         try {
          const response= await axios.get('http://localhost:3000/owner/property/'+id,{ headers: {"Authorization" : `Bearer ${user.Token}`} })
          setdetails(response.data.details)
         
         } catch (error) {
          
         }
    }
                fetchData()
  },[deatails])
  const handleclick=async()=>
  {         
               await axios.post('http://localhost:3000/owner/book/'+id+'/'+checkindate+'/'+checkoutdate,{},{ headers: {"Authorization" : `Bearer ${user.Token}`} }).then(
                       (response)=>
                       {
                            navigate('/book/status')
                       }
               )
  }
  if(deatails!=null)
  {
    
  return (
    <div>

         <Nav/>
         <div>
           <div className='py-32'>
             <img src={home} alt=""  className=' px-12 h-96 ' width="100%"/>
              <br></br>
             <div className='px-12'> 
              <b ><h1 >{deatails[0].description},{deatails[0].location},INDIA</h1></b>
             
              <p>4 guests,1 bedroom,2 beds,1 bathroom</p>
              <br></br>
              <br></br>
              <b><h1>What this place offers</h1></b>
            
              <p>{deatails[0].amenities}</p>
             </div>
           </div>
          
             
<div className='px-12 '>
<div class="max-w-sm border border-gray-200 rounded-lg shadow ">
   
   <div class="p-5">
       <b>INR {deatails[0].rentalrate}</b><span className=" text-sm">/month</span>
       <br></br>
       <br></br>
       <div className='border  border-gray-900 grid grid-cols-2  rounded-lg shadow '>
        <div className='p-5'>CHECK-IN:
        <p>{checkindate}</p></div>
        <div className='p-5 border-l border-gray-900'>CHECK-OUT:
        <p>{checkoutdate}</p>
        </div>
             
              <div className='p-5 border-t border-gray-900 col-start-1 col-end-3 ' >GUESTS: 1 GUEST</div>
            
        
       
       

       </div>
       <br></br>
       <button className='bg-pink-600 w-80 h-30 py-2 text-white rounded-xl' onClick={handleclick}>RESERVE</button>
       <br></br>
       <br></br>
       <b><h1>TOTAL AMOUNT:{month*deatails[0].rentalrate}</h1></b>
   </div>
</div>
</div>



         </div>
    </div>
  )
}}

export default Book