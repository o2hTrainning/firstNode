const express = require('express')
const router = express.Router()

//controllers
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')

//middlewares
const authMiddleware = require('../middleware/authenticate')
//validations
const validation = require('../validation/validator')

router.get('/user',authMiddleware.auth,userController.fetchAll)
router.post('/user',validation.addUser,userController.store)
router.post('/product',productController.store)
router.get('/product',productController.fetchAll)
router.post('/login',userController.login)


module.exports = router;