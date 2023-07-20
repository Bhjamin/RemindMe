const { schedule } = require('@netlify/functions')
const axios = require('axios')
const text = require('textbelt')

const handler = async (event, context) => {

        axios.get('https://remindme-beng.netlify.app/api/sendReminder')
        .then((res) => {
            console.log(res.data)
        })

        text.sendText('4805491152', 'Whats up BENG', undefined, (err) => {
            err && console.log(err)
        })

}

exports.handler = schedule("*/1 * * * *", handler)

// "*/2 19-22 * * *"
