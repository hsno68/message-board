import { Router } from "express";
import { getIndex } from "./controller.js";

const router = Router();

router.get("/", getIndex);

export default router;
