const Task = require('../models/task')

exports.getTask = async (req, res) => {
    try {
        const userId = req.query.id
        const allTasks = await Task.find({assigned_to: userId}).sort({due_date: 1})
        res.status(200).json({ message: "Tasks fetched", tasks: allTasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}