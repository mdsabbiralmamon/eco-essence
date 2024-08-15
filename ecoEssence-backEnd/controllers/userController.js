const getUsers = async (req, res) => {
    // Logic to get users from the database
    const users = await req.db.collection("users").find().toArray();
    res.json(users);
  };
  
  module.exports = {
    getUsers,
  };
  