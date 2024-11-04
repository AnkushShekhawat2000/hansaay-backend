const mongoose = require('mongoose');

const MONGO_URL =  process.env.MONGO_URI


mongoose.connect(MONGO_URL)
.then(() => {
    console.log("mogodb connected succesfully")
})
.catch((err) => {
    console.log(err);
})

