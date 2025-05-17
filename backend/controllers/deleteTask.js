const Task = require('../models/task')

exports.deleteTask = async (req, res) => {
    try {
        const requestRole = req.body.requestRole
        if(requestRole != "admin") {
            return res.status(400).json({message: "Admin priviledges denied"})
        }
        const taskId = req.query.id
        const existingTask = await Task.findOne({_id: taskId})
        if(!existingTask) {
            return res.status(400).json({message: "Task not found"})
        }
        const deleteTask = await Task.findByIdAndDelete(taskId)
        res.status(200).json({message: "Task deleted", task: deleteTask})
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}