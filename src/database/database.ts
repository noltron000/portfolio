import * as Mongoose from "mongoose";
import {uri} from '../database.env'

let database: Mongoose.Connection

const connect = async (): Promise<void> => {
  try {
    if (database) {
      return
    }

    await Mongoose.connect(uri)
    console.info("Connected to database");
  }
  catch {
    console.error("Error connecting to database");
  }
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
