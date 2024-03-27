const db = require("../db/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (walletAddress) => {
  const user = await db.get("users", walletAddress);
  if (!user) {
    return null;
  }
  return user;
};

const generateJWT = (user) => {
  const token = jwt.sign(
    { walletAddress: user.walletAddress, role: user.role },
    "your_secret_key",
    { expiresIn: "1h" }
  );
  return token;
};
