const jwt = require('jsonwebtoken')

/**
 * check the token is authentic or not
 * Author: Yamin
**/
function auth(req, res, next){
    
    //check if token is not undefined 
        let token = req.headers.token;
        jwt.verify(token,'X-^bQu_hRe_d3-kVrLxBhg6', (err, authData) =>{
            
            if(err){
                res.status(403).send({"error":"Not a valid token, authentication failed","code":403});
            }else{
                //check in DB also 
                        next()
            }
        })
   
}

module.exports = {
    auth
}