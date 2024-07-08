import React, { useState } from 'react'
import Nav from './Nav'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Properties = () => {
    const user =JSON.parse(localStorage.getItem("profile"))
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableDates, setAvailableDates] = useState([]);

    const [location,setlocation]=useState()
    const [desc,setdesc]=useState()
    const [amit,setamit]=useState()
    const [rate,setrate]=useState()
    const [mintime,setmintime]=useState()
    const [maxtime,setmaxtime]=useState()
    const [dates,setdates]=useState()
    const navigate=useNavigate()
    const handleDateChange=(date)=>
    {
        setSelectedDate(date);
    }
    const handleAddAvailableDate=()=>
    {

        if (selectedDate) {
            setAvailableDates([...availableDates, selectedDate]);
            setSelectedDate(null);
            
          }
    }
    
    const handleclick=async ()=>
    {
        await axios.post('http://localhost:3000/owner/properties',{location:location,desc:desc,amit:amit,rate:rate,mintime:mintime,maxtime:maxtime,dates:availableDates},{ headers: {"Authorization" : `Bearer ${user.Token}`} }).then(

           (response)=>
           {
              navigate('/home')
           }
        ).then((error)=>{
            console.log(error)
        })
    }
    const statusclick=()=>
    {
          navigate('/book/approve')
    }
  return (
    <div>
               <Nav/>

               <div className='py-14 flex justify-center'>
    <div className='flex flex-col' > 

        <div class=' '>
            <b><h1 class="  text-4xl">Enter Your Properties Details </h1></b>
            <br></br>
            <button class="bg-pink-600 w-56 h-30 py-2 text-white rounded-xl" onClick={statusclick}>CHECK THE APPROVAL LIST</button>
        </div>
        <br></br>
       
        <br></br>
      
        <div>
        <b><h1 class="  text-2xl">Add an Property Image</h1></b>
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
        <b><h1 class="  text-2xl">Add your Location</h1></b>
        <br></br>
        <input type='text' placeholder='Enter Location ' onChange={(e)=>{setlocation(e.target.value)}}/>
        </div>
        <br></br>
        <div>
        <b><h1 class="  text-2xl">Add your description</h1></b>
        <br></br>
        <textarea placeholder='Enter The description'rows="4" cols="50" onChange={(e)=>{setdesc(e.target.value)}}></textarea>
        </div>
        <br></br>
        <div>
        <b><h1 class="  text-2xl">Add your Amities</h1></b>
        <br></br>


        <textarea placeholder='Enter The Amities' rows="4" cols="50" onChange={(e)=>{setamit(e.target.value)}}></textarea>
        </div>
        <br></br>
        <div>
        <b><h1 class="  text-2xl">Add your Rental Rate(INR)</h1></b>
        <br></br>
        <input type='number' placeholder='Enter the rate' onChange={(e)=>{setrate(e.target.value)}}/>
        </div>
        <br></br>

        <div>
        <b><h1 class="  text-2xl">Add your min time for rent(months)</h1></b>
        <br></br>
        <input type='number' placeholder='Enter the rate' onChange={(e)=>{setmintime(e.target.value)}}/>
        </div>
        <br></br>
        <div>
        <b><h1 class="  text-2xl">Add your max time for rent(months)</h1></b>
        <br></br>
        <input type='number' placeholder='Enter the rate' onChange={(e)=>{setmaxtime(e.target.value)}}/>
        </div>
        <br></br>

        <div>
        <b><h1 class="  text-2xl">Add your available dates to rent</h1></b>
        <br></br>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          highlightDates={availableDates.map((date) => new Date(date))}
        />
            <br></br>
            <button class="bg-pink-600 w-56 h-30 py-2 text-white rounded-xl" onClick={handleAddAvailableDate}>Add Available Date</button>
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

export default Properties