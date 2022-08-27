const productmodel = require("../models/productmodel")





const createproduct= async function (req, res) {
    let data  = req.body
    
    
        let savedData= await productmodel.create(data)
        
        
        res.send({msg: savedData})
        
    }
    


    module.exports.createproduct = createproduct