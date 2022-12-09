import { RequestHandler } from "express";
import User, { UserCreationAttributes } from "models/user";

const createUser: RequestHandler = async (req, res) => {
  const userAttributes = req.body as UserCreationAttributes;
  const user = await User.create(userAttributes, { include: { all: true } });

  return res.status(201).json(user);
};

export default createUser;
