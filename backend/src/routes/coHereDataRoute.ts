import * as dataController from "../controllers/cohereDataController";
import express from "express";

const router = express.Router();

router.get("/", dataController.getData);

export default router;
