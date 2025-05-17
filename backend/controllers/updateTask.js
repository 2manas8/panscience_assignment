const Task = require('../models/task')
const User = require('../models/user')

exports.updateTask = async (req, res) => {
    try {
        const taskId = req.query.id
        const existingTask = await Task.findById(taskId)
        if (!existingTask) {
            return res.status(400).json({message: "Task not found"})
        }
        const title = req.body.title
        const description = req.body.description
        const status = req.body.status
        const priority = req.body.priority
        const due_date = req.body.due_date
        const assigned_to = req.body.assigned_to
        const attached_documents = req.body.attached_documents
        const user = await User.findOne({email: assigned_to})
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            {$set: {
                title: title,
                description: description,
                status: status,
                priority: priority,
                due_date: due_date,
                assigned_to: user._id,
                attached_documents: attached_documents
            }}
        )
        res.status(200).json({message: "Task updated", task: updatedTask})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Internal Server Error"})
    }
}