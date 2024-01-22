
const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')

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

const JWT_SECRET = 'Areebaisagoodgirl'



// ROUTE 1: Create a User using: POST "/api/auth/". Doesn't require Auth. No Login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 char').isLength({ min: 5 })

], async (req, res) => {
    let success = false
    // console.log("Request" , req.body)

    // console.log(req.body)
    // const user = User(req.body)
    // user.save()

    // If there are errors, return bad request and the errors
    const errors = validationResult(req)

    // If errors.isEmpty haven't return true
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    try {
        let user = await User.findOne({ email: req.body.email })
        console.log(user)
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }

        // Writing promise
        // Check whether the user with this email exists already
        // Creating a new user



        const salt = await bcrypt.genSalt(10)

        const secPass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            // password: req.body.password,
            password: secPass,
            email: req.body.email
        })

        const data = {
            user: {
                id: user.id
            }
        }



        const authToken = jwt.sign(data, JWT_SECRET)
        console.log({ authToken })

        // res.json(req.body)
        // Using esx
        success = true

        res.json({ success, authToken })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }


    // .then(users => res.json(users))
    // .catch(err=> {console.log(err)
    //     res.json({error: 'Please enter a unique value for email', message: err.message})})


    // res.send(req.body)
})



// ROUTE 2: Authenticate a user using: POST "/api/auth/login". No Login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()

], async (req, res) => {

    let success = false
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ array: errors.array() });
    }
 
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: 'Please try to login with correct credentials' })
        }

        // It return T or F
        const passwordCompare = await bcrypt.compare(password, user.password)
        console.log(passwordCompare)
        console.log(password)
        console.log(user.password)
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: 'Please try to login with correct credfffentials' })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        success = true
        res.json({ success, authToken })

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }

})






// Router 3: Authenticate a User using: "/api/auth/getuser". Login required
router.post('/getUser', fetchuser, async (req, res) => {

    
    try{
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        // console.log(user)
        res.send(user)

    } catch(error){
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }


})


module.exports = router