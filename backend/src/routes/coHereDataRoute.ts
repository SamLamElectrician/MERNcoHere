import * as dataController from "../controllers/cohereDataController";
import express from "express";

const router = express.Router();
//get request for data of call
router.get("/", dataController.getAllData);
//post request for sending data to server
router.post("/", dataController.createData);
//get a single data point
router.get("/:dataId", dataController.getDataPoint);
//update note
router.get("/:dataId", dataController.updateData);

export default router;
