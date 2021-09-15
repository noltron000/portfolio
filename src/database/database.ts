import * as Mongoose from "mongoose";
import {uri} from '../database.env'
import {ProjectModel} from './projects/projects.model'

let database: Mongoose.Connection

const connect = () => {
  if (database) {
    return
  }

  Mongoose.connect(uri)
  database = Mongoose.connection;

  database.once("open", async () => {
    console.info("Connected to database");
  });

  database.on("error", () => {
    console.error("Error connecting to database");
  });

  return {ProjectModel}
}

const disconnect = () => {
  if (!database) {
    return
  }
  Mongoose.disconnect()
}

export {
  connect,
  disconnect,
  database,
}
