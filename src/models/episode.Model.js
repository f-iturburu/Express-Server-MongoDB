import { Schema, model } from "mongoose";

const episode = new Schema({
    season: Number,
    episode: Number,
    title: String,
    summary: String,
    airingDate: Date, 
    image: String,
    opening: String,
})

export default model ("Episode", episode)
