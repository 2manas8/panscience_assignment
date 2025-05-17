const User = require('../models/user')

exports.deleteUser = async (req, res) => {
    try {
        const requestRole = req.body.requestRole
        if(requestRole != "admin") {
            return res.status(400).json({message: "Admin priviledges denied"})
        }
        const email = req.body.email
        const existingEmail = await User.findOne({email: email})
        if(!existingEmail) {
            return res.status(400).json({message: "E-mail does not exist"})
        }
        const deleteUser = await User.deleteOne(existingEmail)
        res.status(200).json({message: "User deleted"})
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
}