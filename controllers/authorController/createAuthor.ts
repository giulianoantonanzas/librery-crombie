import { RequestHandler } from "express";
import Author, { AuthorCreationAttributes } from "models/author";

const createAuthor: RequestHandler = async (req, res) => {
  const bookAttributes = req.body as AuthorCreationAttributes;
  const author = await Author.create(bookAttributes, {
    include: { all: true },
  });
  return res.status(201).json(author);
};

export default createAuthor;
