import kpiModel from "../models/kpiModel.js";

export const getKpis = async (req, res) => {
  try {
    const kpis = await kpiModel.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json(error);
  }
};
