const express = require("express");
const app = express();
const cors = require("cors");

const {user,userprofile}=require('./model/User')
const {properties} =require('./model/Properties')
const {book}=require('./model/Book')
const router=require('./routes/User')
const routerprop=require('./routes/Properties')
app.use(cors());
app.use(express.json());

user()
userprofile()
properties()
book()
app.use('/',router)
app.use('/owner',routerprop)

port=3000

app.listen(port, () => {
	console.log(port);
});
