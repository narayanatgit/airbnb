const sql=require('../dbconnect/dbconnect')


async function properties()
{

const result=await sql`CREATE TABLE IF NOT EXISTS properties( id SERIAL PRIMARY KEY,userid INT,location varchar(255),
Description varchar(255),
    Amenities varchar(255),
    RentalRate INT,
    MinRentalTime INT,
    MaxRentalTime INT,
    AvailableStartDates JSON , CONSTRAINT fk_Employee  
        FOREIGN KEY(userid)   
        REFERENCES users(id))`
}

module.exports={properties}