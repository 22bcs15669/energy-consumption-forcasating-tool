const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('energy/consumption', (err) => {
        if (err) console.error('Subscription error:', err);
    });
});

client.on('message', async (topic, message) => {
    if (topic === 'energy/consumption') {
        const consumption = JSON.parse(message.toString());
        const newData = new EnergyData({ date: new Date(), consumption });
        await newData.save();
        console.log('Energy data saved:', newData);
    }
});
