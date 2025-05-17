const express = require('express')
const router = express.Router()

const {getTask} = require('../controllers/getTask')
router.get('/getTask', getTask);

const {addTask} = require('../controllers/addTask')
router.post('/addTask', addTask);

const {updateTask} = require('../controllers/updateTask')
router.put('/updateTask', updateTask);

const {deleteTask} = require('../controllers/deleteTask')
router.delete('/deleteTask', deleteTask);

module.exports = router