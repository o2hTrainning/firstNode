const { validationResult } = require('express-validator')
const model = require('../models');
const jwt = require('jsonwebtoken')
/**
 * fetch all user
 * Author: Yamin
 * API: GET http://localhost:4004/api/v1/user
**/
exports.fetchAll = async (req,res,next)=>{
    
    let productDetail = await model.Users.findAll({
        //attributes: ['name'],
        //where:{email:email},
        include:[{
            model: model.Products, 
            'as': 'productData',
            //attributes:['id','firstName','lastName']
        }]
    });

    res.status(200).send({'user':productDetail})
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
    let {first_name, last_name, email, address, password} = req.body;

    model.Users.create({firstName:first_name,lastName:last_name,email:email,address:address, password: password,
        productData: [
            {name:'Hyundai',description:'this is product for the hyundai', image:'google.com/images', price: 20.00},
            {name:'Marutu',description:'this is product for the maruti', image:'google.com/images', price: 40.00}
         ]
        },{
            include: [{ model: model.Products, 'as': 'productData'}]
        }).then(addedUser =>{
            console.log(addedUser.id,'addedUser')
            res.status(200).send({'user':addedUser})
    }).catch(error =>{
        console.log(error,'error')
    })
    
}

exports.login = (req,res,next) => {
    let {email, password} = req.body;
    model.Users.findOne({where:{email:email,password: password}}).then(userData => {
        console.log(userData)
        jwt.sign({user:{name:'yamin',email:'yamin@gmail.com'}}, 'X-^bQu_hRe_d3-kVrLxBhg6',{expiresIn:'30d'},(err, token) =>{
            res.status(200).send({'token':token})
        })
    }).catch(err =>{

    })

}