require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const mongodb = "mongodb+srv://agrawalmanan2:12312312@chatbot.fljqvmv.mongodb.net/usermessages"

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Successful deployment!')
})


const messageRouter = require('./routes/messages')
app.use('/messages', messageRouter)

app.listen(3000, () => console.log('Server Started'))