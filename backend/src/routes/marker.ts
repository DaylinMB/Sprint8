import { Router } from "express";
import { getMarkers } from "../controllers/marker";

const router = Router ();

router.get('/', getMarkers);

export default router;