const { schedule } = require('@netlify/functions')
const axios = require('axios')
const text = require('textbelt')

const handler = async (event, context) => {

        axios.get('https://remindme-beng.netlify.app/api/sendReminder')
        .then((res) => {
            console.log(res.data)
        })

}

exports.handler = schedule("*/1 * * * *", handler)

// "*/2 19-22 * * *"
