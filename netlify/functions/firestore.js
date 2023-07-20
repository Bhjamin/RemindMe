const { schedule } = require('@netlify/functions')

const handler = async (event, context) => {

    try {
       const res = await fetch('https://remindme-beng.netlify.app/api/sendReminder')
       console.log("RESPONSE: ", res)
    } catch (err) {
        console.log(err)
    }

}

exports.handler = schedule("*/1 * * * *", handler)
