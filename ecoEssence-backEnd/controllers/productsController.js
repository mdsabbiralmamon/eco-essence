const client = require("../config/database");

// Get All Products API
const getAllProducts = async (req, res) => {
  try {
    const products = await client.db("ecoEssenceDB").collection("products").find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

module.exports = {
  getAllProducts,
};