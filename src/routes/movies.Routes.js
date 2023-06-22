import { Router } from "express";
import { getAllMovies, getMovieById,createMovie } from "../controllers/movie.Controllers.js";
const router = Router()

router.post("/movies", createMovie)
router.get("/movies",getAllMovies)
router.get("/movies:id", getMovieById)

export default router