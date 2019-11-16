const { check, body } = require('express-validator');

exports.addUser = [
        body('first_name').not().isEmpty().withMessage('Please enter your first name'),
        body('last_name').not().isEmpty().withMessage('Please enter your last name'),
        body('email').not().isEmpty().withMessage('Please enter email').isEmail().withMessage('Please enter proper email'),
        body('address').not().isEmpty().withMessage('Please enter address'),
];