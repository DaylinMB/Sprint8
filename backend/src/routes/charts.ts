import { Router } from "express";
import { getChart } from "../controllers/charts";

const router = Router ();

router.get('/:name', getChart);

export default router;