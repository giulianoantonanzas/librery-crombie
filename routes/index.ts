import { Router } from "express";
import bookRouter from "routes/bookRouter";
import rentalRouter from "routes/rentalRouter";
import authorRouter from "./authorRouter";
import authRoute from "./authRouter";
import meRouter from "routes/meRouter";

const appRouter = Router();

appRouter.use("/book", bookRouter);
appRouter.use("/author", authorRouter);
appRouter.use("/me", meRouter);
appRouter.use("/rental", rentalRouter);
appRouter.use("/auth", authRoute);

export default appRouter;
