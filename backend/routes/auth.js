
const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator')

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

// Create a User using: POST "/api/auth/". Doesn't require Auth. No Login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 char').isLength({ min: 5 })

], async (req, res) => {
    // console.log("Request" , req.body)

    // console.log(req.body)
    // const user = User(req.body)
    // user.save()

    // If there are errors, return bad request and the errors
    const errors = validationResult(req)

    // If errors.isEmpty haven't return true
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        let user = await User.findOne({ email: req.body.email })
        // console.log(user)
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }

        // Writing promise
        // Check whether the user with this email exists already
        // Creating a new user
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })

        // res.json(req.body)
        res.json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occured")
    }


    // .then(users => res.json(users))
    // .catch(err=> {console.log(err)
    //     res.json({error: 'Please enter a unique value for email', message: err.message})})


    // res.send(req.body)
})






module.exports = router