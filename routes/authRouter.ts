import login from "controllers/authController/login";
import register from "controllers/authController/register";
import { Router } from "express";
const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);

export default authRoute;
