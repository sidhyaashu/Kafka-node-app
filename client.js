import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.0.107:9092'], // replace with your broker address
});

export default kafka