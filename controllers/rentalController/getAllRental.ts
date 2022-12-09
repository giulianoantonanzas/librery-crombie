import { RequestHandler } from "express";
import Rental from "models/rental";

const getAllRental: RequestHandler = async (req, res) => {
  const rentals = await Rental.findAll();
  return res.status(200).json(rentals);
};

export default getAllRental;
