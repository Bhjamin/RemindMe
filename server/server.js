const express = require("express")

const app = express()

app.use(express.json())

const { handler } = require("./controller")

app.get('/api/sendReminders', handler)

app.listen(5000, () => {
    console.log('server running')
})