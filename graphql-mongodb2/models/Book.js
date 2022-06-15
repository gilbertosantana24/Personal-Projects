import {Schema, model} from 'mongoose';


const bookSchema = newSchema( {
    title: {
        type: String,
        required: true
    },
    author: String,
    date: String,
    version: Number
});

export default model('Book', bookSchema);