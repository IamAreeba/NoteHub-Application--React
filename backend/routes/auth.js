
const express = require('express')
const User = require('../models/User')
const router = express.Router()

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
router.post('/', (req, res) => {
    // console.log("Request" , req.body)
    console.log(req.body)
    const user = User(req.body)
    user.save()

    res.send(req.body)
}) 






module.exports = router