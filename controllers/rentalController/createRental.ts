import { RequestHandler } from "express";
import Rental, { RentalCreationAttributes } from "models/rental";

const createRental: RequestHandler = async (req, res) => {
  const rentalsAttributes = req.body as RentalCreationAttributes;
  const rental = await Rental.create(rentalsAttributes, {
    include: { all: true },
  });

  return res.status(201).json(rental);
};

export default createRental;
