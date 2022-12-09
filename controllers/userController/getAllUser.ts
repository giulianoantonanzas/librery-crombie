import { RequestHandler } from "express";
import User from "models/user";

const getAllUser: RequestHandler = async (req, res) => {
  const users = await User.findAll();

  return res.status(200).json(users);
};

export default getAllUser;
