import WeaveDB from "weavedb-sdk";

//Initialize WeaveDB
const db = new WeaveDB({ contractTxId: process.env.CONTRACT_TX_ID });
await db.init();

export default db;
