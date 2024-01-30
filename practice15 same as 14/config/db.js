const mongoose = require('mongoose');
const config = require("./config");

DBURL = config.DB.dburl;

mongoose.connect(DBURL)
.then(()=>{
    console.log("DB is connected")
})
.catch((err)=>{

    console.log(err.message);
    process.exit(1);
})