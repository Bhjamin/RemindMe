const { schedule } = require('@netlify/functions')
import axios from 'axios'

const handler = async (event, context) => {

    fetch('https://remindme-beng.netlify.app/api/sendReminder')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

}

exports.handler = schedule("*/1 * * * *", handler)
