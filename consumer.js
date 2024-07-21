const { kafka } = require("./config");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  await consumer.connect();
  await consumer.subscribe({ topic: "test", fromBeginning:true });
  await consumer.run({
    eachMessage: async ({ topic, partition, offset, key, message }) => {
      console.log(`[${topic}]: PART:${partition}:`, message.value.toString());
    },
  })
}
init();
