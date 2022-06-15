import { connect, connection } from "mongoose";


const conn = {
    isConnected: false
}

export async function dbConnect(url) {

    if(conn.isConnected) return;

    const db = await connect(process.env.MONGODB_URL)
    conn.isConnected = db.connections[0].readyState;

    console.log(db.connection.db.databaseName)
}

connection.on("connected", () => {
    console.log("mongoDb is connected")
})

connection.on("error", (err) => {
    console.log(err)
})