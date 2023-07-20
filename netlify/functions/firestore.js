const { schedule } = require('@netlify/functions')
const axios = require('axios')

const handler = async (event, context) => {

        axios.get('https://remindme-beng.netlify.app/api/sendReminder')
        .then((res) => {
            console.log(res.data)
        })

        axios('https://textbelt.com/text', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        phone: '4805491152',
                        message: 'Hello beng',
                        key: 'textbelt',
                    }),
                }).then(response => {
                    return response.json();
                }).then(data => {
                    console.log(data);
                });

}

exports.handler = schedule("*/1 * * * *", handler)

// "*/2 19-22 * * *"
