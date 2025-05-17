const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'E-mail is required']
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})

const User = mongoose.model('UserCollection', UserSchema)

module.exports = User