const db = require("../db/db.js");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

exports.registerUser = async (walletAddress) => {
  try {
    // Check if the user already exists
    const existingUser = await db
      .collection("users")
      .findOne({ walletAddress });
    if (existingUser) {
      throw new Error("User already registered");
    }

    // Create a new user document in WeaveDB
    const user = await db.collection("users").create({
      _id: uuidv4(),
      walletAddress,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return user;
  } catch (err) {
    throw err;
  }
};

exports.loginUser = async (walletAddress) => {
  try {
    // Find the user by wallet address
    const user = await db.collection("users").findOne({ walletAddress });
    if (!user) {
      throw new Error("Invalid wallet address");
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return token;
  } catch (err) {
    throw err;
  }
};
