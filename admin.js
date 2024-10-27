// producer.js
import kafka from "./client.js"



async function init() {
    const admin = kafka.admin()
    console.log("Admin Connecting....")
    admin.connect()
    console.log("Admin Connected Success!")


    console.log("Creating Topics [Rider-Updated]")
    await admin.createTopics({
        topics:[
            {
                topic:'rider-updates',
                numPartitions:2,

            }
        ]
    })
    console.log("Topics Created Success [Rider-Updated]")


    console.log("Disconnecting Admin....")
    await admin.disconnect()
    console.log("Admin Disconnectd")
}

init()