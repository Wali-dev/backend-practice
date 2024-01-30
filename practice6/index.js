const PORT = 9000;
const app = require('./app')


app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`)}
)