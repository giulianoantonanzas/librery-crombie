import createBook from "controllers/bookController/createBook";
import deleteBook from "controllers/bookController/deleteBook";
import getAllBook from "controllers/bookController/getAllBook";
import updateBook from "controllers/bookController/updateBook";
import { Router } from "express";
const bookRouter = Router();

bookRouter.get("/", getAllBook);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
