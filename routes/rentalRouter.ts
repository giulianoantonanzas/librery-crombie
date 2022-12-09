import createRental from "controllers/rentalController/createRental";
import deleteRental from "controllers/rentalController/deleteRental";
import getAllRental from "controllers/rentalController/getAllRental";
import updateRental from "controllers/rentalController/updateRental";
import { Router } from "express";
const rentalRouter = Router();

rentalRouter.get("/", getAllRental);
rentalRouter.post("/", createRental);
rentalRouter.put("/:id", updateRental);
rentalRouter.delete("/:id", deleteRental);

export default rentalRouter;
