const { schedule } = require('@netlify/functions')
import axios from 'axios'

const handler = async (event, context) => {

        axios.get('https://remindme-beng.netlify.app/api/sendReminder')
        .then((res) => {
            console.log(res.data)
        })

}

exports.handler = schedule("*/1 * * * *", handler)
