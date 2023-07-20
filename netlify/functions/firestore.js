const { schedule } = require('@netlify/functions')
const axios = require('axios')

const handler = async (event, context) => {

axios.get('https://remindme-beng.netlify.app/.netlify/functions/api/sendReminder')
.then((res) => {
    console.log(res.data)
})
    
}

exports.handler = schedule("*/1 * * * *", handler)
