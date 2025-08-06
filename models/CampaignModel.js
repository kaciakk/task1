import mongoose from "mongoose";

import { CAMPAIGN_STATUS, CAMPAIGN_TOWN } from "../utils/constants.js";

const CampaignSchema = new mongoose.Schema(
  {
    campaignName: { type: String, required: true, unique: true },
    campaignKeywords: { type: [String], default: [] },
    campaignBidAmount: { type: Number, required: true, min: 0.01 },
    campaignFund: { type: Number, required: true },
    campaignStatus: {
      type: Boolean,
      default: CAMPAIGN_STATUS.INACTIVE,
    },
    campaignRadius: { type: Number, default: 10 },
    campaignTown: {
      type: String,
      enum: Object.values(CAMPAIGN_TOWN),
      default: CAMPAIGN_TOWN.KRAKOW,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", CampaignSchema);
