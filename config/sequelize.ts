import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "config/config";
import Author from "models/author";
import Book from "models/book";
import Rental from "models/rental";
import User from "models/user";

const development = config.development;

const sequelize = new Sequelize(
  development.database ?? "",
  development.username ?? "",
  development.password ?? "",
  {
    host: development.host,
    dialect: development.dialect,
    port: development.port,
    models: [Book, Author, User, Rental],
  } as SequelizeOptions
);

export default sequelize;
