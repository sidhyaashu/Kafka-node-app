import kafka from "./client.js"

async function init() {
    const consumer = kafka.consumer({ groupId:"group-1"})

    await consumer.connect()

    await consumer.subscribe({ topics:["rider-updates"],fromBeginning:true})

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                key: message.key.toString(),
                value: message.value.toString(),
                headers: message.headers,
            })
        },
    })

    
}


init()