import createBook from "controllers/bookController/createBook";
import deleteBook from "controllers/bookController/deleteBook";
import getAllBook from "controllers/bookController/getAllBook";
import updateBook from "controllers/bookController/updateBook";
import { Router } from "express";
import checkLogin from "middlewares/checkLogin";
const bookRouter = Router();

bookRouter.get("/", getAllBook);
bookRouter.post("/", checkLogin, createBook);
bookRouter.put("/:id", checkLogin, updateBook);
bookRouter.delete("/:id", checkLogin, deleteBook);

export default bookRouter;
