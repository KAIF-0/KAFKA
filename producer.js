const { kafka } = require("./config");

async function init() {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: "test",
    messages: [{ key: "test", value: "Hello World", partition: 0 }],
  });
  console.log('Message inserted!')
  await producer.disconnect();
}
init();
