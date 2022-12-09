import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "config/config.json";
import Author from "models/author";
import Book from "models/book";
import Rental from "models/rental";
import User from "models/user";

const local = config.local;

const sequelize = new Sequelize(
  local.database,
  local.username,
  local.password,
  {
    host: local.host,
    dialect: local.dialect as "mysql",
    port: local.port,
    models: [Book, Author, User, Rental],
  } as SequelizeOptions
);

export default sequelize;
