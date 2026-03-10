import { Router } from "express";
import { getIndex, getForm, submitForm } from "./controller.js";

const router = Router();

router.get("/", getIndex);
router.get("/new", getForm);

router.post("/new", submitForm);

export default router;
