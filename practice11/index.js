const app = require('./app')
const PORT = 8000;








app.listen(PORT, ()=>{
    console.log(`The server is running on http:localhost:${PORT}`)
})