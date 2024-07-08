const sql=require('../dbconnect/dbconnect')



async function user()
{


    const result=await sql`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
        
        
    );`

}

async function userprofile()
{
    const result=await sql `CREATE TABLE IF NOT EXISTS profile(id INT ,profileimageurl varchar(255),phoneno varchar(255),age INT,hobbies varchar(255),intrests varchar(255),smoker varchar(255),CONSTRAINT fk_Employee  
    FOREIGN KEY(id)   
    REFERENCES users(id)  ) `

}


module.exports={user,userprofile}

