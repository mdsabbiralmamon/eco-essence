const client = require("../config/database");

// Get All Products API
const getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 12, sort = 'newest', search = '', brand = '', category = '', minPrice = 0, maxPrice = 10000 } = req.query;

    // Convert page and limit to numbers
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    // Build query object
    const query = {
      name: { $regex: search, $options: 'i' },
      brand: { $regex: brand, $options: 'i' },
      category: { $regex: category, $options: 'i' },
      price: { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) }
    };

    // Define sorting
    let sortOption;
    switch (sort) {
      case 'priceAsc':
        sortOption = { price: 1 };
        break;
      case 'priceDesc':
        sortOption = { price: -1 };
        break;
      case 'newest':
      default:
        sortOption = { dateAdded: -1 };
        break;
    }

    // Fetch products with pagination
    const products = await client.db("ecoEssenceDB").collection("products")
      .find(query)
      .sort(sortOption)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .toArray();

    // Count total products for pagination
    const totalProducts = await client.db("ecoEssenceDB").collection("products").countDocuments(query);

    res.json({
      products,
      totalPages: Math.ceil(totalProducts / limitNumber),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = {
  getAllProducts,
};
