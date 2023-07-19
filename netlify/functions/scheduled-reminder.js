const { schedule } = require('@netlify/functions')

const { getDocs, dailyTasksRef } = require("../../common/db")

const { client } = require("../../common/twilio")

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

        console.log("Above da if gaytment")

        if (today.getHours() >= 8) {

            console.log('BENG BENGENBENBNG')

            // if (task5 && !task5complete) {
            //     client.messages
            //         .create({
            //             body: `${task5} has not been done yet`,
            //             from: "+18668219659",
            //             to: "+14805491152",
            //         })
            //         .then((message) => console.log("hit", message.sid))
            //         .done()
            // }

            // if (task4 && !task4complete) {
            //     client.messages
            //         .create({
            //             body: `${task4} has not been done yet`,
            //             from: "+18668219659",
            //             to: "+14805491152",
            //         })
            //         .then((message) => console.log("hit", message.sid))
            //         .done()
            // }

            // if (task3 && !task3complete) {
            //     client.messages
            //         .create({
            //             body: `${task3} has not been done yet`,
            //             from: "+18668219659",
            //             to: "+14805491152",
            //         })
            //         .then((message) => console.log("hit", message.sid))
            //         .done()
            // }

            // if (task2 && !task2complete) {
            //     client.messages
            //         .create({
            //             body: `${task2} has not been done yet`,
            //             from: "+18668219659",
            //             to: "+14805491152",
            //         })
            //         .then((message) => console.log("hit", message.sid))
            //         .done()
            // }

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

exports.handler = schedule("*/2 * * * *", handler)
