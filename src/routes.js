import { Router } from "express";
import controllerWrapper from "./helpers/controllerWrapper.js";

const router = Router();

// Controllers
import { createVote } from "./controllers/votes/createVote.js";
import { getVotes } from "./controllers/votes/getVotes.js";

// Endpoints
router.post("/votes", controllerWrapper(createVote));
router.get("/votes/", controllerWrapper(getVotes));

export default router;
