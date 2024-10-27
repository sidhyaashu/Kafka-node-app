import kafka from "./client.js"


async function init(){
    const producer = kafka.producer()

    console.log("Connecting to the producer....")
    await producer.connect()
    console.log("Connected succesfully !")

    await producer.send({
        topic: 'rider-updates',
        messages: [
            { 
                key: "location-update",
                value: JSON.stringify({name:"Sidhya",loc:"SOUTH"}),
            },
        ]
    })

    await producer.disconnect()
}

init()