// import WeaveDB from "weavedb-sdk";
import WeaveDB from "weavedb-sdk-node"

//Initialize WeaveDB
const db = new WeaveDB({ contractTxId: "xI5zun1g6UnftxGdwo6ZOy5CXZkpkKMd4Jb6zhf0RHk" });
await db.init();

export default db;
