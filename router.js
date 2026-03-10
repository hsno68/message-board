import { Router } from "express";
import { getIndex, getMessage, getForm, submitForm } from "./controller.js";

const router = Router();

router.get("/", getIndex);
router.get("/new", getForm);
router.get("/message/:id", getMessage);

router.post("/new", submitForm);

export default router;
