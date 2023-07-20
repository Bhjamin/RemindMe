const admin = require('firebase-admin')
const functions = require('firebase-functions')
const serviceAccount = require('../serviceAccountKey.json')
const text = require('textbelt')
import axios from 'axios';

admin.initializeApp({ projectId: 'dailyreminders-62630', credential: admin.credential.cert(serviceAccount) }, functions.config().firebase);

const firestore = admin.firestore();

// const accountSid = "ACbf760a670c4bf70307b8050664c1cfa8"
// const authToken = "58eb3774b93fed3abbfa656bedbdff56"
// const client = require("twilio")(accountSid, authToken)

const docRef = firestore.collection('dailyTasks').doc('tasks')

module.exports = {

    handleReminder: async (req, res) => {

        const data = await docRef.get()

        console.log("hit", data._fieldsProto)

        const { task1complete, task2, task2complete, task3, task3complete, task4, task4complete, task5, task5complete } = data._fieldsProto

        let today = new Date();

        if (today.getHours() >= 13) {

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

                text.send('4805491152', 'Whats up BENG', undefined, (err) => {
                    err && console.log(err)
                })


            }
        }

        return {
            statusCode: 200,
        };

    }

}