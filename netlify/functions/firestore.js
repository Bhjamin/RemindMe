const { schedule } = require('@netlify/functions')
const axios = require('axios')
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const serviceAccount = require('../../serviceAccountKey.json')
const { Vonage } = require('@vonage/server-sdk')

admin.initializeApp({ projectId: 'dailyreminders-62630', credential: admin.credential.cert(serviceAccount) }, functions.config().firebase);

const firestore = admin.firestore();

const docRef = firestore.collection('dailyTasks').doc('tasks')

const handler = async (event, context) => {

        // axios.get('https://remindme-beng.netlify.app/.netlify/functions/api/sendReminder')
        // .then((res) => {
        //     console.log(res.data)
        // })

        const data = await docRef.get()

        console.log("hit", data._fieldsProto)

        const { task1complete, task2, task2complete, task3, task3complete, task4, task4complete, task5, task5complete } = data._fieldsProto

        let today = new Date();

        if (today.getHours() === 19) {

            // if (task5.stringValue && !task5complete.booleanValue) {
            //     client.messages
            //         .create({
            //             body: `${task5.stringValue} has not been done yet`,
            //             from: "+18668219659",
            //             to: "+14805491152",
            //         })
            //         .then((message) => console.log("hit", message.sid))
            //         .catch(err => console.log(err))
            // }

            // if (task4.stringValue && !task4complete.booleanValue) {
            //     client.messages
            //         .create({
            //             body: `${task4.stringValue} has not been done yet`,
            //             from: "+18668219659",
            //             to: "+14805491152",
            //         })
            //         .then((message) => console.log("hit", message.sid))
            //         .catch(err => console.log(err))
            // }

            // if (task3.stringValue && !task3complete.booleanValue) {
            //     client.messages
            //         .create({
            //             body: `${task3.stringValue} has not been done yet`,
            //             from: "+18668219659",
            //             to: "+14805491152",
            //         })
            //         .then((message) => console.log("hit", message.sid))
            //         .catch(err => console.log(err))
            // }

            // if (task2.stringValue && !task2complete.booleanValue) {
            //     client.messages
            //         .create({
            //             body: `${task2.stringValue} has not been done yet`,
            //             from: "+18668219659",
            //             to: "+14805491152",
            //         })
            //         .then((message) => console.log("hit", message.sid))
            //         .catch(err => console.log(err))
            // }

            if (!task1complete.booleanValue) {

                // client.messages
                //     .create({
                //         body: `You have not worked out today`,
                //         from: "+18668219659",
                //         to: "+14805491152",
                //     })
                //     .then((message) => console.log("hit", message.sid))
                //     .catch(err => console.log(err))

                console.log("HIT TEXT")

                const vonage = new Vonage({
                    apiKey: "84b6fed3",
                    apiSecret: "HtPnQEaVrO5aXdRe"
                })

                const time = new Date()

                const from = "18722550122"
                const to = "14805491152"
                const text = `Bello Beng, at past 7`

                async function sendSMS() {
                    await vonage.sms.send({ to, from, text })
                        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
                }

                sendSMS();


            }
        } else {
            console.log('Its not 7 yet')
        }

        return {
            statusCode: 200,
        };

}

exports.handler = schedule("*/1 * * * *", handler)

// "*/2 19-22 * * *"
