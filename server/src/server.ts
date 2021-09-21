import * as express from "express";
import { connect } from "mongoose";
import projectRoutes from "./database/projects/router"

import { uri } from "./database.env";

const app = express();
const port = 5000;

connect(uri);

app.use('/', projectRoutes)

app.listen(port, () => {
  console.info(`Server started on http://localhost:${port}`);
});
