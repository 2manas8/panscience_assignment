const User = require('../models/user')

exports.updateUser = async (req, res) => {
    try {
        const requestRole = req.body.requestRole
        if(requestRole != "admin") {
            return res.status(400).json({message: "Admin priviledges denied"})
        }
        const currentEmail = req.body.currentEmail
        const name = req.body.name
        const email = req.body.email
        const role = req.body.role
        const existingEmail = await User.findOne({email: email})
        if(existingEmail) {
            return res.status(400).json({message: "E-mail already used"})
        }
        const updateUser = await User.updateOne(
            {email: currentEmail},
            {$set: {
                name: name,
                email: email,
                role: role
            }}
        )
        res.status(200).json({message: "User updated"})
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
}