const client = require("../config/database");

const getUsers = async (req, res) => {
  try {
    const users = await client.db("ecoEssenceDB").collection("users").find().toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

module.exports = {
  getUsers,
};
