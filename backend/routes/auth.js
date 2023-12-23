
const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult  } = require('express-validator')

/* 01
router.get('/', (req,res) => {
    obj = {
        name: 'Areeba',
        gender: 'Female'
    }
    res.json(obj)
})

*/


/* 02
router.get('/', (req, res) => {
    console.log("Request" , req.body)
})

*/

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 char').isLength({ min: 5 })

    ], (req, res) => {
    // console.log("Request" , req.body)

    // console.log(req.body)
    // const user = User(req.body)
    // user.save()

    const errors = validationResult(req)

    // If errors.isEmpty haven't return true
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }

    // Writing promise
    User.create ({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(users => res.json(users))
    .catch(err=> {console.log(err)
        res.json({error: 'Please enter a unique value for email', message: err.message})})


    // res.send(req.body)
}) 






module.exports = router