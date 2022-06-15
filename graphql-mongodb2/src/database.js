import mongoose from "mongoose";

export function connect() {
    try {
        mongoose.connect('mongodb://localhost:27017/mongodbgraphql', {
            useNewUrlParser: true
    }) ;
    console.log('database connected')
} catch (error) {
    console.log(error)
}

}