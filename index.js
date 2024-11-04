const express = require("express");
require("dotenv").config();  // import dotenc pakg
const cors = require("cors");  // Import the cors package


const db = require("./db");
const queryModel = require("./querySchema");

const app = express();
const Port = process.env.PORT || 8001


// middleware 
// CORS Middleware 
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true  
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));  


app.get("/", (req, res) => {
    res.send("home route hit");
})


app.post("/createQuery", async (req, res) => {


    const { fullName, email, mobileNumber, message } = req.body;

    const newQueryObj = new queryModel({
     fullName : fullName,
     email : email,
     mobileNumber : mobileNumber,
     message : message,
     creationDateTime : new Date().toISOString()  // get current date and time in ISO format
    })
  
    try{

        const savedQuery = await newQueryObj.save(); 
        
     
        return res.send({
            status: 201,
            message: "Query created successfully",
            data: savedQuery,
        })

    } catch(err){
        console.log(err);
        return res.status(500).send("Server Error");
    }
})



app.listen(Port, () => {
    console.log("Server is running on port 8000");
})