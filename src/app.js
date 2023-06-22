import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config.js";
import episodesRoutes from "./routes/episodes.routes.js";
import moviesRoutes from "./routes/movies.Routes.js"

const app = express()

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
app.use(morgan("dev"))
app.use(express.json());
app.use(episodesRoutes)
app.use(moviesRoutes)

export default app