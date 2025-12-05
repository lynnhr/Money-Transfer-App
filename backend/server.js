const express = require("express");
const cors = require("cors");

// Correct path based on your folder structure
const db = require("./config/db");

const authRoutes = require("./routes/authRoute");
const transactionRoutes = require("./routes/transRoute");
const supportRoutes = require("./routes/supportRoute");

const app = express();
app.use(cors());
app.use(express.json());

// =========================
// TEST DATABASE CONNECTION
// =========================
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("✅ Connected to MySQL");
    connection.release();
  } catch (err) {
    console.error("❌ MySQL connection FAILED:", err.message);
  }
})();

app.get("/", (req, res) => res.send("BonPay API is working"));

// Routes
app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/support", supportRoutes);

// Test DB endpoint
app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1+1 AS result");
    res.json({ connected: true, result: rows[0].result });
  } catch (err) {
    console.log(err);
    res.json({ connected: false, error: err.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Backend running → http://localhost:3000");
});
