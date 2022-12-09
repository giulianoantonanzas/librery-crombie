import { RequestHandler } from "express";
import Author from "models/author";

const getAllAuthor: RequestHandler = async (req, res) => {
  const authors = await Author.findAll();
  return res.status(200).json(authors);
};

export default getAllAuthor;
