import { Router } from "express";
import { getAllMovies, getMovieById,createMovie,updateMovie, deleteMovieById } from "../controllers/movie.Controllers.js";
const router = Router()

router.post("/movies", createMovie)
router.get("/movies",getAllMovies)
router.get("/movies:id", getMovieById)
router.patch("/movies:id", updateMovie)
router.delete("/movies/:id", deleteMovieById)

export default router