import { Router } from "express";

const router = Router();

import {
  getAllCampaigns,
  getSingleCampaign,
  deleteCampaign,
  updateCampaign,
  createCampaign,
} from "../controllers/campaignController.js";

import {
  validateCampaignInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router
  .route("/")
  .get(getAllCampaigns)
  .post(validateCampaignInput, createCampaign);
router
  .route("/:id")
  .get(validateIdParam, getSingleCampaign)
  .patch(validateIdParam, validateCampaignInput, updateCampaign)
  .delete(validateIdParam, deleteCampaign);

export default router;
