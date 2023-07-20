const { schedule } = require('@netlify/functions')
const axios = require('axios')

const handler = async (event, context) => {

    try {
        await axios.get('https://remindme-beng.netlify.app/api/sendReminder')
            .then((res) => {
                console.log(res.data)
            })
    } catch (err) {
        console.log(err)
    }


}

exports.handler = schedule("*/1 * * * *", handler)
