import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import User from "models/user";
import jwt from "jsonwebtoken";

type Body = {
  email: string;
  password: string;
};

const login: RequestHandler = async (req, res) => {
  console.log("entrooooo", req);

  const body = req.body as Body;

  const [user] = await User.findAll({
    where: {
      email: body.email,
    },
    limit: 1,
  });
  if (!user) {
    return res.status(400).json({ message: "User or passwors is invalid" });
  }
  const isSame = bcrypt.compareSync(body.password, user.password);

  if (isSame) {
    const payload = {
      email: user.email,
      id: user.id,
    };
    const token = jwt.sign(payload, "secd21din12oi1");
    return res.status(200).json({
      payload: {
        token,
      },
    });
  } else {
    return res.status(400).json({ message: "User or passwors is invalid" });
  }
};

export default login;
