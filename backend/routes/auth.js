
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    obj = {
        name: 'Areeba',
        gender: 'Female'
    }
    res.json(obj)
})

module.exports = router