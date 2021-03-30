//const Kafka = require("kafkajs").Kafka
const kafka = require('./kafka');

run();
async function run() {
    try {
        const admin = kafka.admin();
        console.log("Connecting.....")
        await admin.connect()
        console.log("Connected!")
        //A-M, N-Z
        await admin.createTopics({
            "topics": [{
                "topic": "Mailer",
                "numPartitions": 2
            }]
        })
        console.log("Created Successfully!")
        await admin.disconnect();
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        process.exit(0);
    }


}