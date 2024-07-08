const sql=require('../dbconnect/dbconnect')


async function book()
{

    const result=await sql`CREATE TABLE IF NOT EXISTS Bookings(booking_id SERIAL PRIMARY KEY,property_id INT REFERENCES properties(id),
    renter_id INT REFERENCES users(id),
    checkin_date DATE NOT NULL,
    checkout_date DATE NOT NULL,
    status  VARCHAR(50) CHECK (status IN ('pending','approved','rejected'))  ,
    payment_status  VARCHAR(50)  CHECK (payment_status IN ('pending', 'paid', 'refunded'))NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP                        



)`
}

module.exports={book}