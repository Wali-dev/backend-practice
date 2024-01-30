const {v4: uuidv4} = require("uuid");

const productList = [
    {
        "id": uuidv4(),
        "name": "Laptop",
        "price": 40000
    },
    {
        "id": uuidv4(),
        "name": "Mobile Phone",
        "price": 10000

    }
]

module.exports = productList;