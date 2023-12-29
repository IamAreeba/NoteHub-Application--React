
const express = require('express')
const Notes = require('../models/Notes')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')
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
// router.post('/', (req, res) => {
//     // console.log("Request" , req.body)
//     console.log(req.body)
//     const user = User(req.body)
//     user.save()

//     res.send(req.body)
// }) 


// ROUTE 1: Get All the Notes using: GET "api/auth/fetchalluser". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        console.log(notes)
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 2: Get All the Notes using: GET "api/auth/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {

    try {
        const {title, description, tag} = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const note = new Notes({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()
        res.json(savedNote)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }



})








module.exports = router