import kafka from "./client.js"
import readline from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.output
})


async function init(){
    const producer = kafka.producer()

    console.log("Connecting to the producer....")
    await producer.connect()
    console.log("Connected succesfully !")

    rl.setPrompt("> ")
    rl.prompt()


    rl.on("line", async function(line){
        const [riderName , location ] = line.split(" ")

        await producer.send({
            topic: 'rider-updates',
            messages: [
                { 
                    partition:location.toLowerCase() === "north"?0:1,
                    key: "location-update",
                    value: JSON.stringify({name:riderName,location}),
                },
            ]
        })
    }).on('close', async ()=>{
        await producer.disconnect()
    })

    
}

init()