const jwt = require('jsonwebtoken')
const JWT_SECRET = 'Areebaisagoodgirl'


const fetchuser = (req, res, next) => {
    // Get the user from JWT Token and add id  to request obj
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send({error: "Please authenticate using a valid token"})
    }
    // Maybe our token is not valid so we put them in try catch

    try{
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next()
    } catch (error){
        return res.status(401).send({ error: "Please authenticate using a valid token "})
    }

}


module.exports = fetchuser