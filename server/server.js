const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const { handler } = require("./controller")

app.get('/api/sendReminders', handler)

app.listen(5000, () => {
    console.log('server running')
})