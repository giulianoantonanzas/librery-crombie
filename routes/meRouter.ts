import getMe from "controllers/meController/getMe";
import { Router } from "express";
import checkLogin from "middlewares/checkLogin";
const meRouter = Router();

meRouter.get("/", checkLogin, getMe);

export default meRouter;
