const express = require('express');
const kafka = require('./kafka');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "Welcome"
    });
});

app.post('/mail', async (req, res) => {
    const value = req.body.value;

    try {
        const producer = kafka.producer();
        console.log("Connecting....");
        await producer.connect();
        console.log("Connected!")

        const result = await producer.send({
            "topic": "Mailer",
            "messages": [
                {
                    "value": value
                }
            ]
        });

        await producer.disconnect();

        return res.json({
            result
        });
    } catch (error) {
        return res.json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log(`App is running on port: 3000`);
});