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
   VALUES (?, ?, ?, ?, 'SUCCESS')`,
  [senderId, receiverId, amount, "QR Payment"]
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
      "SELECT balance FROM users WHERE id = ?",
      [userId]
    );

    res.json(rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Could not fetch balance" });
  }
};


exports.getHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const sql = `
      SELECT 
        t.id,
        t.sender_id,
        t.receiver_id,
        t.amount,
        t.message,
        t.status,
        t.created_at,
        u1.name AS sender,
        u2.name AS receiver
      FROM transactions t
      JOIN users u1 ON t.sender_id = u1.id
      JOIN users u2 ON t.receiver_id = u2.id
      WHERE t.sender_id = ? OR t.receiver_id = ?
      ORDER BY t.created_at DESC
    `;

    const result = await db.query(sql, [userId, userId]);
    const rows = result[0];

    res.json(rows);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Could not fetch history" });
  }
};


exports.scanQR = async (req, res) => {
  const connection = await db.getConnection();

  try {
    const { senderId, receiverId, amount } = req.body;

    if (!senderId || !receiverId || !amount) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await connection.beginTransaction();


    const [senderRows] = await connection.query(
      "SELECT balance FROM users WHERE id = ?",
      [senderId]
    );

    if (!senderRows.length) {
      await connection.rollback();
      return res.status(404).json({ error: "Sender not found" });
    }

    const senderBalance = senderRows[0].balance;
    if (senderBalance < amount) {
      await connection.rollback();
      return res.status(400).json({ error: "Insufficient balance" });
    }

    
    const [receiverRows] = await connection.query(
      "SELECT id FROM users WHERE id = ?",
      [receiverId]
    );
    if (!receiverRows.length) {
      await connection.rollback();
      return res.status(404).json({ error: "Receiver not found" });
    }

   
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
      [senderId, receiverId, amount, "QR payment"]
    );

    await connection.commit();
    return res.json({ success: true, message: "QR payment complete" });
  } catch (err) {
    console.log(err);
    await connection.rollback();
    return res.status(500).json({ error: "Transaction error" });
  } finally {
    connection.release();
  }
};
