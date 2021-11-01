import * as dotenv from "dotenv"
import * as express from "express";
import { connect } from "mongoose";
import projectRoutes from "./database/projects/router"

dotenv.config()

const app = express();
const uri: string = process.env.MONGODB_URI
const port: string = process.env.PORT ?? '5000'

connect(uri);

app.use(express.json())
app.use('/', projectRoutes)

app.listen(port, () => {
	console.info(`Server started on http://localhost:${port}`);
});
