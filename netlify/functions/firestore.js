const { schedule } = require('@netlify/functions')
const axios = require('axios')


const handler = async (event, context) => {

axios.get('https://remindme-beng.netlify.app/api/sendReminders')
.then((res) => {
    console.log(res.data)
})
    
}

exports.handler = schedule("*/2 * * * *", handler)
