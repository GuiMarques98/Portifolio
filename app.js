const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyPartser = require('body-parser')
require('dotenv/config')

app.use(bodyPartser.json())

// IMPORT ROUTES
const postRoute = require('./routes/post')


app.use('/post', postRoute)

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})

app.listen(3000)

mongoose.connect(process.env.MONGO_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true, }, () => console.log('MongoDB connected!'))