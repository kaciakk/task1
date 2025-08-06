import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customError.js";
import { CAMPAIGN_STATUS, CAMPAIGN_TOWN } from "../utils/constants.js";
import mongoose from "mongoose";
import CampaignModel from "../models/CampaignModel.js";
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no campaign")) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateCampaignInput = withValidationErrors([
  body("campaignName").notEmpty().withMessage("campaignName is required"),
  body("campaignKeywords")
    .notEmpty()
    .withMessage("campaignKeywords is required"),
  body("campaignBidAmount")
    .notEmpty()
    .withMessage("campaignBidAmount is required"),
  body("campaignFund").notEmpty().withMessage("campaignFund is required"),
  body("campaignStatus")
    .isIn(Object.values(CAMPAIGN_STATUS))
    .withMessage("Invalid campaign status!"),
  body("campaignRadius").notEmpty().withMessage("campaignRadius is required"),
  body("campaignTown")
    .isIn(Object.values(CAMPAIGN_TOWN))
    .withMessage("Invalid campaign town"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("Invalid MongoDB id");
    const campaign = await CampaignModel.findById(value);
    if (!campaign) throw new NotFoundError(`no campaign with id ${value}`);
  }),
]);
