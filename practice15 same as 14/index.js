const app = require("./app")
const dev = require('./config/config')

const PORT = dev.APP.PORT;








app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})