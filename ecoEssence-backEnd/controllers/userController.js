const client = require("../config/database");

// Get All Users API
const getUsers = async (req, res) => {
  try {
    const users = await client.db("ecoEssenceDB").collection("users").find().toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Save User Data API
const saveUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await client.db("ecoEssenceDB").collection("users").insertOne(user);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to save user" });
  }
};

module.exports = {
  getUsers, saveUser
};
