const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    status: {
        type: String,
        default: 'assigned'
    },
    priority: {
        type: String,
        default: 'low'
    },
    due_date: {
        type: Date,
        default: null
    },
    assigned_to: {
        type: mongoose.Schema.ObjectId,
        ref: 'UserCollection'
    },
    attached_documents: [{
        type: String,
        default: null
    }]
})

const Task = mongoose.model('TaskCollection', TaskSchema)

module.exports = Task