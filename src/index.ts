import mqtt from 'mqtt';
const client = mqtt.connect("mqtt://192.168.137.165:1883",
{
  clientId: "the-first-one",
});

client.on("connect", function () {
  console.log("Device Connected")
  client.subscribe("testTopic", function (err) {
    console.log("Subscribed to testTopic");
  });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log('Received Message:', topic, message.toString())
});
