require("dotenv").config();
const db = require("./db");
const server = require("./server");

const port = process.env.PORT || 7070;

const main = async () => {
  await db.connect();

  const svr = await server();

  svr.listen(port, () => console.log(`http://127.0.0.1:${port}`));
};

main();
