const express=require('express')
const sql=require('../dbconnect/dbconnect')
const routerprop=express.Router()
const validatePassword=require('../utils/passwordvalid')
const asyncHandler = require("express-async-handler");

const bcrypt = require('bcrypt');
const generateToken=require('../utils/generateToken')
const authMiddleware = require("../utils/Verfiy");

const emailvalid=require('../utils/emailvalidation');



routerprop.post('/properties',authMiddleware,asyncHandler(async(req,res)=>
{
         const {location,desc,amit,rate,mintime,maxtime,dates}=req.body

         id=req.user[0].id
         const find=await sql`select location,Description from properties where userid=${id}`
           
         if(!find&&find[0].location===location&&find[0].desc===desc)
         {
            return res.status(400).json({error:"property already exists"})
         }

         const prop=await sql `insert into properties (userid,location,Description,
         Amenities,
         RentalRate ,
         MinRentalTime ,
         MaxRentalTime ,
         AvailableStartDates) values(${id},${location},${desc},${amit},${rate},${mintime},${maxtime},${dates}) RETURNING 
            id,userid,location,Description,
            Amenities,
            RentalRate ,
            MinRentalTime ,
            MaxRentalTime ,
            AvailableStartDates`
            if(prop)
    {
      return res.status(200).json({data:prop[0]})
    }


}))
routerprop.post('/search',authMiddleware,asyncHandler(asyncHandler(async(req,res)=>
{

              const {checkin,checkout,location}=req.body

              const checkInDate = new Date(checkin);
            const checkOutDate = new Date(checkout);
              time= checkOutDate-checkInDate

              month=time/(1000 * 60 * 60 * 24 * 30)
              month=Math.round(month)
              
              const filter=await sql`select * from properties where location=${location} and minrentaltime <= ${month} and maxrentaltime >= ${month} `
              if(filter)
              {
                return res.status(200).json({filter,checkInDate,checkOutDate})
              }
})))

routerprop.get('/property/:id',authMiddleware,asyncHandler(async(req,res)=>
{

                  id=req.params.id
                  
                  const details=await sql `select * from properties where id=${id}`
                
                  return res.status(200).json({details})
                  
             
}))
routerprop.get('/profile/:id',authMiddleware,asyncHandler(async(req,res)=>
{               
                  id=req.params.id
                 
                  ownerid=req.user[0].id
                 const profile=await sql `select *from profile where id=${id} `
                 const details=await sql  ` select * from users where id=${id}`

                  return res.status(200).json({profile,details})
}))
routerprop.get('/ownerprofile/:id',authMiddleware,asyncHandler(async(req,res)=>
{               
                  id=req.params.id
                 
                  const ownerid=await sql  `select userid from properties where id=${id} `
                  console.log(ownerid)
                 const profile=await sql `select *from profile where id=${ownerid[0].userid} `
                 const details=await sql  ` select * from users where id=${ownerid[0].userid}`

                  return res.status(200).json({profile,details})
}))

routerprop.get('/status',authMiddleware,asyncHandler(async(req,res)=>
{

               id=req.user[0].id 

               const bookdetails=await sql `select * from bookings where renter_id=${id}`


               return res.status(200).json({bookdetails})
              
}))

routerprop.post('/book/:id/:checkindate/:checkoutdate',authMiddleware,asyncHandler(async(req,res)=>
{
  idp=req.params.id
  checkindate=req.params.checkindate
  checkoutdate=req.params.checkoutdate
  idu=req.user[0].id
  console.log(idu)
   const propertiesdetails=await sql`select * from properties where id=${idp}`
   const userdetaisl=await sql`select *from  users where id=${id}`
   const ownerdetails=await sql`select * from users where id=${propertiesdetails[0].userid}`
   const phno=await sql`select phoneno from profile where id=${propertiesdetails[0].userid}`
  
     const find=await sql`select * from bookings where property_id=${idp} and renter_id=${id}`
     if(find)
     {
      const book=await sql`insert into bookings (property_id,renter_id,checkin_date,checkout_date,status,payment_status,price) values (${idp},${idu},${checkindate},${checkoutdate},${"pending"},${"pending"},${propertiesdetails[0].rentalrate}) 
   RETURNING booking_id,${propertiesdetails[0].userid},${phno[0].phoneno},property_id,renter_id,checkin_date,checkout_date, status , payment_status,price,created_at
   `
   if(book)
   {
    return res.status(200).json({data:book[0],phno:phno[0].phoneno})
   }
     }
     else
     {
      return res.status(400).json({erroe:"already requested sent"})
     }


   
}))

routerprop.get('/book/approve/',authMiddleware,asyncHandler(async(req,res)=>
{
                
                  ownerid=req.user[0].id

                  const properties=await sql `SELECT b.booking_id,b.property_id,b.renter_id, b.checkin_date, b.checkout_date, b.status,b.payment_status,b.price
                  FROM bookings b
                  JOIN properties p ON b.property_id = p.id
                  WHERE p.userid = ${ownerid}; `

                  res.status(200).json({properties})
                  
             
                 
                 

                  
}))
routerprop.post('/book/approve/:id',authMiddleware,asyncHandler(async(req,res)=>
{
  ownerid=req.user[0].id
  bookid=req.params.id
 
  const update=await sql`update bookings set status='approved' where booking_id=${bookid}`
  const up=await sql`select * from bookings where booking_id=${bookid}`
  return res.status(200).json({data:up})

}))

module.exports=routerprop