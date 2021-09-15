import * as express from "express";
import { connect } from "./database/database";

const app = express();
const port = 5000;

connect();

app.listen(port, () => {
  console.info(`Server started on http://localhost:${port}`);
});
