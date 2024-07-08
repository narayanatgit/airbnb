const express=require('express')
const sql=require('../dbconnect/dbconnect')
const router=express.Router()
const validatePassword=require('../utils/passwordvalid')
const asyncHandler = require("express-async-handler");

const bcrypt = require('bcrypt');
const generateToken=require('../utils/generateToken')
const authMiddleware = require("../utils/Verfiy");

const emailvalid=require('../utils/emailvalidation')


router.post('/register',emailvalid,validatePassword,asyncHandler(async(req,res)=>

{    
    const saltRounds = 10;

var hashpass
    
    if(!req.body.name)
		{
			return res.status(400).json({ error: 'username is required' });
		}
		if(!req.body.email)
		{
			return res.status(400).json({ error: 'email is required' });
		}
		if(!req.body.password)
		{
			return res.status(400).json({ error: 'passwaord is required' });
		}
    const { name, email, password } = req.body;

    
    bcrypt.hash(password, saltRounds, function(err, hash) {
        hashpass=hash
   });

    const find=await sql`select * from users where email=${email} `

    if(find[0])
    {
        return res.status(400).json({data:"user already exists"})
     
    }
    result=await sql`insert into users (name,email,password) values (${name},${email},${hashpass}) RETURNING id,name,email,password`
    if(result)
    {
      
      return res.status(200).json({Token:generateToken(email),id:result[0].id,name:result[0].name,email:result[0].email,password:result[0].password})
    }
   
}))


router.post('/login',asyncHandler(async(req,res)=>
{
   
    const { email, password } = req.body;
    console.log(password)
    const find=await sql`select * from users where email=${email}  `

 if(find)
 {
  
   await bcrypt.compare(password, find[0].password).then(function(result)
   {
    console.log(result)
    if(result)
    {
     return res.status(200).json({Token: generateToken(find[0].email),
        id:find[0].id,
        name: find[0].name,
        email: find[0].email,
        password: find[0].password,})
    }
      
   })
  
}
else
{
    return res.status(401).json({error:"enter the details"});
			
}
}))




router.post('/profile',authMiddleware,asyncHandler(async(req,res)=>
{
  
    const {imageurl,phno,age,hobbies,intrests,smokerstatus}=req.body
      id=req.user[0].id
     
      const profile=await sql`insert into profile (id,profileimageurl,phoneno,age,hobbies,intrests,smoker) values(${id},${imageurl},${phno},${age},${hobbies},${intrests},${smokerstatus}) RETURNING ${id},profileimageurl,phoneno,age,hobbies,intrests,smoker `

      if(profile)
    {
      return res.status(200).json({data:profile[0]})
    }
}))


router.get('/view',authMiddleware,asyncHandler(async(req,res)=>
{
                const data=await sql`select users.id,users.name,users.email,profile.profileimageurl,profile.phoneno,profile.age,profile.hobbies,profile.intrests,profile.smoker from users,profile where users.id=profile.id`
              
                    
               res.status(200).json({dat:data[0]})
                
}))
module.exports = router;