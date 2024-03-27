const { loginUser } = require("./auth.service");

const login = async (req, res) => {
  try {
    const { walletAddress } = req.body;
    const user = await loginUser(walletAddress);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const token = generateJWT(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
