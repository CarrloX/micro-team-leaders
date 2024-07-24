import express, { Request, Response } from "express";
import { AppDataSource } from "./config/connection-db";
import { client } from "./config/eureka-client";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(7000, () => {
  console.log("Server started on port 7000");
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source connected!");

    app.listen(7000, () => {
      console.log("Server started on port 7000");
      client.start((error) => {
        console.log(error || "Eureka client started");
      });
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });
