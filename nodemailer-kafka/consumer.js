const kafka = require('./kafka');
const nodemailer = require('nodemailer');

require('dotenv').config();

let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

run();
async function run() {
    try {
        const consumer = kafka.consumer({"groupId": "test"});
        console.log("Connecting");
        await consumer.connect();
        console.log("Connected!");

        await consumer.subscribe({
            "topic": "Mailer",
            "fromBeginning": true,
        });

        await consumer.run({
            "eachMessage": async result => {
                let info = await transport.sendMail({
                    from: '"ANONYMOUS COMPANY" <anonymous@company.com>',
                    to: "foo@example.com",
                    subject: "Success",
                    text: result.message.value,
                    html: `<b>${result.message.value}</b>`
                });

                console.log(`Message sent: ${info.messageId}`);
            }
        });

    } catch (error) {
        console.log(`error: ${error.message}`);
    }
}