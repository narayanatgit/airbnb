import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

const Bookapprove = () => {

    const [book,setbook]=useState()
    const user =JSON.parse(localStorage.getItem("profile"))
    useEffect(()=>

{
        const fetchdata=async()=>
         {
             const res=await axios.get('http://localhost:3000/owner/book/approve',{ headers: {"Authorization" : `Bearer ${user.Token}`} })
             
             setbook(res.data.properties)
         }
         fetchdata()
})
const navigate=useNavigate()
if(book!=null)
{
  return (
    <div>
         <div>
          <Nav/>
         </div>
        
         <div className='py-36  px-56'>
         <div  className=''>
          <b ><h1 className=' text-2xl' >RENTAL APPROVAL LIST</h1></b>
         </div>
         <br></br>
         <div>
         <table class=" table-auto border-collapse border border-slate-500 ...">
  <thead>
    <tr>
      <th class="border border-slate-600 ...">Booking_id</th>
      <th class="border border-slate-600 ...">checkin_date</th>
      <th class="border border-slate-600 ...">checkout_date</th>
      <th class="border border-slate-600 ...">payment_status</th>
      <th class="border border-slate-600 ...">price</th>
      <th class="border border-slate-600 ...">property_id</th>
      <th class="border border-slate-600 ...">renter_id</th>
      <th class="border border-slate-600 ...">status</th>
      <th class="border border-slate-600 ...">Actions</th>
    </tr>
  </thead>
  <tbody>

    {!(book.length>0)?(<></>):(<>


             {book.map((item)=>(
          <>
          
          
          <tr>
                  <td class="border border-slate-700 ...">{item.booking_id}</td>
                  <td class="border border-slate-700 ...">{item.checkin_date}</td>
                  
                  <td class="border border-slate-700 ...">{item.checkout_date}</td>
                  <td class="border border-slate-700 ...">{item.payment_status}</td>
                  <td class="border border-slate-700 ...">{item.price}</td>
             
                  <td class="border border-slate-700 ...">{item.property_id}</td>
                  <td class="border border-slate-700 ...">{item.renter_id}</td>
                  <td class="border border-slate-700 ...">{item.status}</td>
                  <td class="border border-slate-700 ...">
                  <button class="bg-green-600 w-32 h-30 py-2 text-white rounded-xl" 
                  onClick={

                    async()=>
                    {  console.log("hello")
                           await axios.post('http://localhost:3000/owner/book/approve/'+item.booking_id,{},{ headers: {"Authorization" : `Bearer ${user.Token}`} }).then(
                            (response)=>
                            {
                              
                            }
                           )    
                    }
                  }
                  
                  >APPROVE</button>
                  <button class="bg-red-600 w-32 h-30 py-2 text-white rounded-xl"  >REJECT</button>
                  <button class="bg-pink-600 w-32 h-30 py-2 text-white rounded-xl" 
                    onClick={
                      async()=>
                      {
                         navigate(`/profile/${item.renter_id}`)
                      }
                    }
                  >CHECK PROFILE</button>

                  </td>
                  
                  </tr>
                  
                  
                  
                 
          </>
               

                  

             ))}
   
    
                            
    </>)}
    
    
  </tbody>
</table>
</div>
</div>
    </div>
  )
}
}

export default Bookapprove