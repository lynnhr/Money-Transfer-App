const express = require("express");
const cors = require("cors");


const db = require("./config/db");

const authRoutes = require("./routes/authRoute");
const transactionRoutes = require("./routes/transRoute");
const supportRoutes = require("./routes/supportRoute");

const app = express();
app.use(cors());
app.use(express.json());


(async () => {
  try {
    const connection = await db.getConnection();
    console.log("connected to mySQL");
    connection.release();
  } catch (err) {
    console.error("mySQL connection failed:", err.message);
  }
})();

app.get("/", (req, res) => res.send("BonPay API is working"));


app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/support", supportRoutes);


app.listen(3000, () => {
  console.log("Backend running → http://localhost:3000");
});
