require("dotenv").config();
import express from "express";
import router from "./routes/routes";

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());


app.use("/", router);


app.get("/", (req, res) => {
  res.status(200).json({
    message: "server responding - app.ts",
  });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});