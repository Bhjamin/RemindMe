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

    const data = await docRef.get()

    console.log("hit", data._fieldsProto)

    const { task1complete, task2, task2complete, task3, task3complete, task4, task4complete, task5, task5complete } = data._fieldsProto

    const vonage = new Vonage({
        apiKey: "84b6fed3",
        apiSecret: "HtPnQEaVrO5aXdRe"
    })

    if (task5.stringValue && !task5complete.booleanValue) {
        const from = "18722550122"
        const to = "14805491152"
        const text = `${task5.stringValue} has not been done yet`

        async function sendSMS() {
            await vonage.sms.send({ to, from, text })
                .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
        }

        sendSMS();
    } else if (task4.stringValue && !task4complete.booleanValue) {

        const from = "18722550122"
        const to = "14805491152"
        const text = `${task4.stringValue} has not been done yet`

        async function sendSMS() {
            await vonage.sms.send({ to, from, text })
                .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
        }

        sendSMS();
    } else if (task3.stringValue && !task3complete.booleanValue) {


        const from = "18722550122"
        const to = "14805491152"
        const text = `${task3.stringValue} has not been done yet`

        async function sendSMS() {
            await vonage.sms.send({ to, from, text })
                .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
        }

        sendSMS();
    } else if (task2.stringValue && !task2complete.booleanValue) {

        const from = "18722550122"
        const to = "14805491152"
        const text = `${task2.stringValue} has not been done yet`

        async function sendSMS() {
            await vonage.sms.send({ to, from, text })
                .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
        }

        sendSMS();

    } else if (!task1complete.booleanValue) {

        let from = "18722550122"
        let to = "14805491152"
        let text = `You haven't worked out yet today, wtf bro`

        async function sendSMS() {
            await vonage.sms.send({ to, from, text })
                .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
        }

        sendSMS();

        from = "18722550122"
        to = "13852447384"
        text = `From my friend Alex: Is it possible to get my dog pregnant? From my friend Ryan: say "102 eggs" in Spanish. Wtf my friends are kind of weird man but I love em.`

        async function sendSMS2() {
            await vonage.sms.send({ to, from, text })
                .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
        }

        sendSMS2();

    }

    return {
        statusCode: 200,
    };

}

exports.handler = schedule("*/5 1 * * *", handler)
