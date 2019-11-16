const { validationResult } = require('express-validator')
const model = require('../models');
/**
 * fetch all user
 * Author: Yamin
 * API: GET http://localhost:4004/api/v1/user
**/
exports.fetchAll = async (req,res,next)=>{
    let productDetail = await model.Products.findAll({
        //attributes: ['name'],
        //where:{email:email},
        include:[{
            model: model.Users, 
            'as': 'UserData',
            //attributes:['id','firstName','lastName']
        }]
    });

    res.status(200).send({'product':productDetail})
}

/**
 * add user
 * Author: Yamin
 * API: POST http://localhost:4004/api/v1/user
**/
exports.store = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).send({"error":errors.array()[0].msg,"code":422});
    }
    let {name, description, image, price, user_id} = req.body;

    model.Products.create({name:name,description:description,image:image,price:price, user_id: user_id}).then(addedProduct =>{
        addedProduct
        console.log(addedProduct.id,'addedUser')
        res.status(200).send({'success':'add product','id':addedProduct.id})
    }).catch(error =>{
        console.log(error,'error')
        res.status(500).send({'success':'add product'})
    })
    
}