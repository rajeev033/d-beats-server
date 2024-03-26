const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to D-Beat backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
