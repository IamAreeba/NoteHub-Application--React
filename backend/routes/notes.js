
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
        const { title, description, tag } = req.body
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


// ROUTE 3: Update an existing Notes using: PUT "api/auth/updatenote". Login required

router.put('/updatenote/:id', fetchuser, async (req, res) => {

    //Getting all the things using destructuring
    const { title, description, tag } = req.body

    try {
        const newNote = {}
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id)
        console.log(req.param.id)
        console.log(note)
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})


// ROUTE 4: Delete an existing Notes using: DELETE "api/auth/deletenote/:id". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        // Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }

         // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Below note has been deleted", note: note })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})



module.exports = router