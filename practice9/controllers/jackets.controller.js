const path = require('path');
const jackets = require('../models/jackets.model')

exports.getjacket = (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/jacket.html'))
}

exports.savejacket = (req, res)=>{
    const name = req.body.jacketName;
    const size = req.body.size;

    const jacket= {
        name,
        size,
    }

    jackets.push(jacket);

    res.send(jackets)

}
