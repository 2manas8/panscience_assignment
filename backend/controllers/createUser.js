const User = require('../models/user')
const bcrypt = require('bcryptjs')

exports.createUser = async (req, res) => {
    try {
        const requestRole = req.body.requestRole
        if(requestRole != "admin") {
            return res.status(400).json({message: "Admin priviledges denied"})
        }
        const name = req.body.name
        const email = req.body.email
        const role = req.body.role
        const existingEmail = await User.findOne({email: email})
        if(existingEmail) {
            return res.status(400).json({message: "E-mail already used"})
        }
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)
        const saveUser = await User.create({
            name: name,
            email: email,
            role: role,
            password: password
        })
        res.status(200).json({message: "User registered"})
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
}