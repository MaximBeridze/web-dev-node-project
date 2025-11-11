import express from "express";
import { logMiddleware } from "./middleware/middleware.js";

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Dave" },
];

app.use(express.json()); // must come before routes

// use middleware before routes
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.json(users);
});

app.post("/", (req, res) => {
  console.log("Request body:", req.body);
  res.status(201).json({message: "Received POST", body: req.body,});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
