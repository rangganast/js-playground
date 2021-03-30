const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    "clientId": "mailer-test",
    "brokers": ["localhost:9092"]
});

module.exports = kafka;