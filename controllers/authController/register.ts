import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import User from "models/user";

const salt = 10;

type Body = {
  email: string;
  password: string;
  repeatPassword: string;
};

const register: RequestHandler = async (req, res) => {
  try {
    const body = req.body as Body;

    if (body.password !== body.repeatPassword) {
      return res.status(400).json({ message: "password not match" });
    }
    const hash = bcrypt.hashSync(body.password, salt);
    await User.create({
      email: body.email,
      password: hash,
    });

    return res.status(201).json({ message: "User has been created!" });
  } catch (err) {
    console.log("entro");

    return res.status(400).json(err);
  }
};

export default register;
