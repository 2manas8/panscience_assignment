const express = require('express')
const router = express.Router()

const {createUser} = require('../controllers/createUser')
router.post('/createUser', createUser)

const {updateUser} = require('../controllers/updateUser')
router.post('/updateUser', updateUser)

const {deleteUser} = require('../controllers/deleteUser')
router.delete('/deleteUser', deleteUser)

module.exports = router