const { schedule } = require('@netlify/functions')
const axios = require('axios')

const handler = async (event, context) => {

    try {
       const res = await axios.get('https://remindme-beng.netlify.app/api/sendReminder')
       console.log("RESPONSE: ", res)
    } catch (err) {
        console.log(err)
    }

}

exports.handler = schedule("*/1 * * * *", handler)
