import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import axios from 'axios'
const Status = () => {
  const user =JSON.parse(localStorage.getItem("profile"))
  const [state,setstate]=useState()

  const navigate=useNavigate()
  useEffect(()=>

{

           const fetch=async()=>
           {
                  await axios.get('http://localhost:3000/owner/status',{ headers: {"Authorization" : `Bearer ${user.Token}`} }).then(


                  (resposne)=>
                  {
                    setstate(resposne.data.bookdetails)
                  
                  }
                  )
           }
           fetch()
})

if(state!=null)
{
  return (
    <div>
    <div>
     <Nav/>
    </div>
   
    <div className='py-36  px-56'>
    <div  className=''>
     <b ><h1 className=' text-2xl' >STATUS</h1></b>
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
 <th class="border border-slate-600 ...">owner details</th>

</tr>
</thead>
<tbody>

{!(state.length>0)?(<></>):(<>


        {state.map((item)=>(
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
             <button class="bg-pink-600 w-32 h-30 py-2 text-white rounded-xl" onClick={

              async()=>
              {

                navigate(`/ownerprofile/${item.property_id}`)
              
              }
             } >OWNER DETAILS</button>
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

export default Status