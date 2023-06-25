import { Router } from "express";
import { createEpisode } from "../controllers/episodes.controllers.js";
import { getAllEpisodes } from "../controllers/episodes.controllers.js";
import { getEpisodeById } from "../controllers/episodes.controllers.js";
import { deleteEpisodeById } from "../controllers/episodes.controllers.js";


const router = Router()

router.get("/episodes", getAllEpisodes)

router.get("/episodes/:id",getEpisodeById)
router.post("/episodes", createEpisode)

router.delete("/episodes/:id/",deleteEpisodeById)

router.post("/episodes",createEpisode)
export default router