const db = require("../config/db");


exports.signup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const [exists] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (exists.length > 0)
      return res.status(400).json({ error: "Email already exists" });

    const [result] = await db.query(
      "INSERT INTO users (name, email, phone, password, balance) VALUES (?,?,?,?,0)",
      [name, email, phone, password]
    );

    res.json({
      id: result.insertId,
      name,
      email,
      phone,
      balance: 0
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const[rows] = await db.query(
            "SELECT id, name, email, phone, balance FROM users WHERE email=? AND password=?",
            [email,password]
        );

        if(rows.length == 0)
            return res.status(401).json({error: "Invalid email or password"});

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({error: "server error"});
    }
};

