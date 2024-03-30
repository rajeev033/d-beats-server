const express = require("express");
const ethers = require("ethers");
const cors = require("cors");
const factoryAbi = require("./abi/factoryAbi.json");
const marketplaceAbi = require("./abi/marketplaceAbi.json");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const factoryAddress = "0x242309090561301ff7A27a1d675f2c0dA06845FD";
const marketplaceAddress = "0x4690C5d846Abb49d0b6B2a04D4aa3B16e4aFC287";

const provider = new ethers.providers.WebSocketProvider(
  `wss://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_ARB_SEPOLIA_KEY}`
);

export const factoryContract = new ethers.Contract(
  factoryAddress,
  factoryAbi,
  provider
);

export const marketplaceContract = new ethers.Contract(
  marketplaceAddress,
  marketplaceAbi,
  provider
);

app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to D-Beat backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
