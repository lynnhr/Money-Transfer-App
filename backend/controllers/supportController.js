const db = require("../config/db");

exports.sendSupport = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await db.query(
      "INSERT INTO support_messages (name, email, message) VALUES (?,?,?)",
      [name, email, message]
    );

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ error: "Could not send support message" });
  }
};
