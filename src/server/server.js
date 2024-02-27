const express = require("express");
const ViteExpress = require("vite-express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const socket = require("socket.io");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.json({ limit: "200mb" }));
app.use(
  express.urlencoded({ limit: "200mb", extended: true, parameterLimit: 50000 })
);
app.use(express.text({ limit: "200mb" }));

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", require("./auth/index.js"));
app.use("/api", require("./api/index.js"));

const server = ViteExpress.listen(app, PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const io = socket(server, {
  allowEIO3: true,
  cors: { credentials: true, origin: "http://localhost:3000" },
});
