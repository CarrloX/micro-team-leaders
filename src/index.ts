import express, { Request, Response } from "express";

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

export default app;