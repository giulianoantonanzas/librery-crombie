import express from "express";
import cors from "cors";
import sequelize from "config/sequelize";
import appRouter from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", appRouter);
app.use("/file", express.static(`${__dirname}/public`));

app.listen(3000, async () => {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("DB connected and app listen");
});
