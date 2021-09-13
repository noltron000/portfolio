import * as Mongoose from "mongoose";
// import { ProjectModel } from "./projects/projects.model";

let database: Mongoose.Connection

const connect = () => {
  if (database) {
    return
  }

  // TODO: Add my own URI below.
  const uri: string = ''
  Mongoose.connect(uri)
  database = Mongoose.connection;

  database.once("open", async () => {
    console.info("Connected to database");
  });

  database.on("error", () => {
    console.error("Error connecting to database");
  });
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
}
