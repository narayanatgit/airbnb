import React,{useState} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import Nav from './Nav'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const user =JSON.parse(localStorage.getItem("profile"))
  const [properties,setproperties]=useState({})
  const [dis,setdis]=useState(false)
  const [location,setlocation]=useState()
  const [ind,setind]=useState()
  const [out,setout]=useState()
  const [indc,setindc]=useState()
  const [outc,setoutc]=useState()
  const navigate=useNavigate()
  const handleclick=async()=>
  {
        const res=await axios.post('http://localhost:3000/owner/search',{checkin:ind,checkout:out,location:location},{ headers: {"Authorization" : `Bearer ${user.Token}`} })
       console.log(res.data)
        setproperties(res.data.filter)
        setindc(res.data.checkInDate)
        setoutc(res.data.checkOutDate)
        setdis(true)
      
                    
  }
  const rentstatus=()=>
  {
   navigate('/book/status')
  }
  return (
    <div>
      <Nav/>
      <div className='justify-center py-40 '>
         <b><h1 className='  px-96 text-2xl'>Find the best Rentals </h1></b>
         <br></br>
         <div className='flex flex-col  px-96 '>

         <div className='flex flex-row'>
                 <b className='basis-1/4'><label>CheckinDate</label></b>
                 <input  type='date' onChange={(e)=>{setind(e.target.value)}} />
         </div>
         <br></br>
         <div className='flex flex-row'>
                 <b className='basis-1/4'><label>CheckoutDate</label></b>
                 <input type='date' onChange={(e)=>{setout(e.target.value)}} />
         </div>
         <br></br>
         <div className='flex flex-row'>
                 <b className='basis-1/4'><label>Location</label></b>
                 <input type='text' placeholder='Enter the Location' onChange={(e)=>{setlocation(e.target.value)}}/>
         </div>
         <br></br>
         <div className='flex flex-row'>
          <div className='basis-1/2'><button class="bg-pink-600 w-32 h-30 py-2 text-white rounded-xl " onClick={handleclick} >Search</button></div>
               
               <button class="bg-pink-600 w-32 h-30 py-2 text-white rounded-xl basis-1/2" onClick={rentstatus}>CHECK RENTAL STATUS</button>
         </div>
         <br></br>
         <br></br>
         <div>
                      
                {!(properties.length>0)? (<></>):(<div   >
                                 {properties.map((item)=>(

                                       <>
                                      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Location: {item.location},India</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.amenities}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rental rate:{item.rentalrate}</p>
                                    
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">CheckinDate: {indc}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">CheckoutDate: {outc}</p>
                                    
                                   
                                    <Link  to={`/book/${item.id}/${indc}/${outc}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Reserve
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</a>                         <br></br>
                                       </>
                                 ))}
                           
                </div>)}
         </div>
               

         </div>

      </div>
    </div>
  )
}

export default Search