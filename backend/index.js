require('dotenv').config()
const express = require('express')
const http = require('http')

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())

const auth = require('./routes/authentication')
app.use('/api/auth', auth)

const admin = require('./routes/admin')
app.use('/api/admin', admin)

const task = require('./routes/task')
app.use('/api/task', task)

const dbConnect = require('./config/database')
dbConnect()

app.listen(port, () => {
    console.log('Server is running at port ' + port)
})

app.get('/', (req, res) => {
    res.send('Backend is running')
})