const {kafka} = require('./config') 


async function init(){
    const admin = kafka.admin()
    console.log("Connectiong...")
    await admin.connect()
    console.log("Connected!")

    await admin.createTopics({
        topics: [{topic: "test", numPartitions: 2}] 
    })
    console.log("Topics created!")
    await admin.disconnect()
};
init();