import { Router } from "express";
import {
  getApodPlaceholder,
  getMissionDigestPlaceholder
} from "../controllers/space.controller.js";

/*
  Routes decide WHICH controller handles a request.
  They should stay light.

  Keep business logic out of routes when possible.
*/

const router = Router();

router.get("/apod", getApodPlaceholder);
router.get("/missions", getMissionDigestPlaceholder);

export { router as spaceRouter };
