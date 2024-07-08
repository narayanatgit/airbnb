import React from 'react'
import Nav from './Nav'
import rent from './assests/rent.jpeg'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate=useNavigate()
  const handleforrent=()=>
  {
              navigate('/properties')
  }
  const handleclickrent=()=>
  {
    navigate('/search')
  }
  return (
    <div>

         <Nav/>
         <div class='flex flex-row justify-center'>
            
          <div class='py-44  px-20' onClick={handleforrent}>
          <div class=" relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="card-image" />
  </div>
  <div class="p-6">
    <h1 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    I have a room to rent
    </h1>
    
  </div>
  <div class="p-6 pt-0">
    
  </div>
</div>  
          </div>

          <div class='py-44' onClick={handleclickrent}>
          <div class=" relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={rent} width="100%"
      alt="card-image" />
  </div>
  <div class="p-6">
    <h1 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Find a room to rent
    </h1>
    
  </div>
  <div class="p-6 pt-0">
    
  </div>
</div>  
          </div>
         
         </div>


    </div>
  )
}

export default Home