import { RequestHandler } from "express";
import Book, { BookCreationAttributes } from "models/book";

const createBook: RequestHandler = async (req, res) => {
  try {
    const file = req.file;
    const imageName = file?.filename;
    const bookAttributes = req.body as BookCreationAttributes;
    const book = await Book.create(
      { ...bookAttributes, imageName },
      {
        include: [{ all: true }],
      }
    );
    return res.status(201).json(book);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createBook;
