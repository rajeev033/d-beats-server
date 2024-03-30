// import WeaveDB from "weavedb-sdk";
import WeaveDB from "weavedb-sdk-node"
import dotenv from "dotenv";

//Initialize WeaveDB
const db = new WeaveDB({ contractTxId: process.env.CONTRACT_TX_ID });
await db.init();

export default db;
