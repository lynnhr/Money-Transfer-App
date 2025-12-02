const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoute");
const transactionRoutes = require("./routes/transRoute");
const supportRoutes = require("./routes/supportRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("BonPay API is working"));

app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/support", supportRoutes);

app.listen(3000, () =>
  console.log("Backend running → http://localhost:3000")
);

//tessttt if connected to mysql
app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await require("./config/db").query("SELECT 1+1 AS result");
    res.json({ connected: true, result: rows[0].result });
  } catch (err) {
    console.log(err);
    res.json({ connected: false, error: err.message });
  }
});