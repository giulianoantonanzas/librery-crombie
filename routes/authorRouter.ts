import createAuthor from "controllers/authorController/createAuthor";
import deleteAuthor from "controllers/authorController/deleteAuthor";
import getAllAuthor from "controllers/authorController/getAllAuthor";
import updateAuthor from "controllers/authorController/updateAuthor";
import { Router } from "express";
const authorRouter = Router();

authorRouter.get("/", getAllAuthor);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

export default authorRouter;
