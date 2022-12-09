import { RequestHandler } from "express";
import Book from "models/book";

const getAllBook: RequestHandler = async (req, res) => {
  const books = await Book.findAll();
  return res.status(200).json(books);
};

export default getAllBook;
