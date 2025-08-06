import CampaignModel from "../models/CampaignModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllCampaigns = async (req, res) => {
  const campaigns = await CampaignModel.find({});
  res.status(200).json({ campaigns });
};

export const getSingleCampaign = async (req, res) => {
  const campaign = await CampaignModel.findById(req.params.id);
  res.status(StatusCodes.OK).json({ campaign });
};

export const createCampaign = async (req, res) => {
  const campaign = await CampaignModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ campaign });
};

export const updateCampaign = async (req, res) => {
  const updatedCampaign = await CampaignModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(StatusCodes.OK).json({ msg: "campaign modify", updatedCampaign });
};

export const deleteCampaign = async (req, res) => {
  const removeCampaign = await CampaignModel.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: "campaign delete", removeCampaign });
};
