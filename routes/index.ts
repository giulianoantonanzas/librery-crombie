import { Router } from "express";
import bookRouter from "routes/bookRouter";
import rentalRouter from "routes/rentalRouter";
import userRouter from "routes/userRouter";
import authorRouter from "./authorRouter";

const appRouter = Router();

appRouter.use("/book", bookRouter);
appRouter.use("/author", authorRouter);
appRouter.use("/user", userRouter);
appRouter.use("/rental", rentalRouter);

export default appRouter;
