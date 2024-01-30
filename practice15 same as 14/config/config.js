require('dotenv').config();

const dev = {
    APP:{
        PORT : process.env.PORT
    },
   
   DB: {
    dburl: process.env.DB_URL

    }
}




module.exports = dev;