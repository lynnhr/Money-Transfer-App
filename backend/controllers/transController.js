const db = require("../config/db");

exports.sendMoney = async (req, res) => {
  const connection = await db.getConnection();

  try {
    const { senderId, receiverEmail, amount, message } = req.body;

    await connection.beginTransaction();

    const [receiver] = await connection.query(
      "SELECT id FROM users WHERE email = ?",
      [receiverEmail]
    );

    if (!receiver.length) {
      await connection.rollback();
      return res.status(404).json({ error: "Receiver not found" });
    }

    const receiverId = receiver[0].id;

    await connection.query(
      "UPDATE users SET balance = balance - ? WHERE id = ?",
      [amount, senderId]
    );

    await connection.query(
      "UPDATE users SET balance = balance + ? WHERE id = ?",
      [amount, receiverId]
    );

    await connection.query(
      `INSERT INTO transactions (sender_id, receiver_id, amount, message, status)
       VALUES (?,?,?,?, 'SUCCESS')`,
      [senderId, receiverId, amount, message || ""]
    );

    await connection.commit();
    res.json({ message: "Transfer complete" });

  } catch (err) {
    console.log(err);
    await connection.rollback();
    res.status(500).json({ error: "Transfer failed" });
  } finally {
    connection.release();
  }
};


exports.getBalance = async (req, res) => {
  try {
    const { userId } = req.params;

    const [rows] = await db.query(
      "SELECT balance FROM users WHERE id=?",
      [userId]
    );

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch balance" });
  }
};


exports.getHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const [rows] = await db.query(
      `SELECT t.id, t.amount, t.message, t.status, t.created_at,
              u1.name AS sender, u2.name AS receiver
       FROM transactions t
       JOIN users u1 ON t.sender_id = u1.id
       JOIN users u2 ON t.receiver_id = u2.id
       WHERE sender_id = ? OR receiver_id = ?
       ORDER BY t.created_at DESC`,
      [userId, userId]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch history" });
  }
};
