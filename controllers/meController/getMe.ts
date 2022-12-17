import { RequestHandler } from "express";
import User from "models/user";

const getMe: RequestHandler = async (_req, res) => {
  const user = res.locals.user as User;
  return res.status(200).json(user);
};

export default getMe;
