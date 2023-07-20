const { schedule } = require('@netlify/functions')
const axios = require('axios')

const handler = async (event, context) => {

        axios.get('https://remindme-beng.netlify.app/api/sendReminder')
        .then((res) => {
            console.log(res.data)
        })

}

exports.handler = schedule("*/2 19-22 * * *", handler)
