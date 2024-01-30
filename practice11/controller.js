const {v4: uuidv4} = require("uuid");
let productList = require('./model')


const getProduct = (req, res)=>{
    res.sendFile(__dirname + "/views/homepage.html")
}

const addProduct = (req, res)=>{
    const newProduct = {
        id: uuidv4(),
        name : req.body.name,
        price: Number(req.body.price),
    }
    productList.push(newProduct);
    res.json(productList)
}

const updateProduct = (req, res)=>{
    const productid = req.params.id;


    const {newname, newprice} = req.body;

    productList.filter((product)=>product.id === productid).map((selected)=>{
        selected.name = newname;
        selected.price = newprice;
    })
    
}

const deleteProduct = (req, res)=>{
    const productid = req.params.id;

    const remainingproduct = productList.filter((product)=>product.id != productid)

    res.json(remainingproduct)
}

module.exports ={getProduct, addProduct, updateProduct, deleteProduct}