import createUser from "controllers/userController/createUser";
import deleteUser from "controllers/userController/deleteUser";
import getAllUser from "controllers/userController/getAllUser";
import updateUser from "controllers/userController/updateUser";
import { Router } from "express";
const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
