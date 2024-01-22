import { Router } from "express";
import { getKpis } from "../controllers/kpi.js";

const router = Router();

router.get("/kpis", getKpis);

export default router;
