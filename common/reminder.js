const { db } = require('../../src/config/firebase')
const { getDocs, collection } = require("firebase/firestore")

const accountSid = "ACbf760a670c4bf70307b8050664c1cfa8"
const authToken = "494ce34901e6a26a371e984cb80c9643"
const client = require("twilio") (accountSid, authToken)

const dailyTasksRef = collection(db, 'dailyTasks')

const handler = async (event, context) => {

    try {
        const data = await getDocs(dailyTasksRef);

        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        console.log(filteredData[0]);

        const {task1complete, task2, task2complete, task3, task3complete, task4, task4complete, task5, task5complete} = filteredData[0]

        let today = new Date();

        if (today.getHours() >= 8) {

            if (task5 && !task5complete) {
                client.messages
                    .create({
                        body: `${task5} has not been done yet`,
                        from: "+18668219659",
                        to: "+14805491152",
                    })
                    .then((message) => console.log("hit", message.sid))
                    .done()
            }

            if (task4 && !task4complete) {
                client.messages
                    .create({
                        body: `${task4} has not been done yet`,
                        from: "+18668219659",
                        to: "+14805491152",
                    })
                    .then((message) => console.log("hit", message.sid))
                    .done()
            }

            if (task3 && !task3complete) {
                client.messages
                    .create({
                        body: `${task3} has not been done yet`,
                        from: "+18668219659",
                        to: "+14805491152",
                    })
                    .then((message) => console.log("hit", message.sid))
                    .done()
            }

            if (task2 && !task2complete) {
                client.messages
                    .create({
                        body: `${task2} has not been done yet`,
                        from: "+18668219659",
                        to: "+14805491152",
                    })
                    .then((message) => console.log("hit", message.sid))
                    .done()
            }

            if (!task1complete) {
                client.messages
                    .create({
                        body: `You have not worked out today`,
                        from: "+18668219659",
                        to: "+14805491152",
                    })
                    .then((message) => console.log("hit", message.sid))
                    .done()
            }
        }

    } catch (err) {
        console.log(err);
    }

    return {
        statusCode: 200,
    };
};

export default handler