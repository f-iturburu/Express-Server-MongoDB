import { Schema, model } from "mongoose";

const movie = new Schema({
    title: String,
    summary : String,
    airingDate: Date,
    image: String,
    trailer: String,
},{
    timestamps:true
})

export default model ("Movie", movie)