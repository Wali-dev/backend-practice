const {v4: uuidv4} = require("uuid");

var users = [
    {
        id: uuidv4(),
        "name": "Abhishek Thakur",
        "email": "abhishek@gmail.com",
    },
    {
        id: uuidv4(),
        "name": "Supriya Thakur",
        "email": "thakur@gmail.com",
    },
]

module.exports = users;