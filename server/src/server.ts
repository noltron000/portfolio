import * as express from "express";
import { connect } from "mongoose";

import { uri } from "./database.env";

const app = express();
const port = 5000;

connect(uri);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.info(`Server started on http://localhost:${port}`);
});
