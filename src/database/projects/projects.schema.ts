import { Schema } from "mongoose";
import * as Statics from "./projects.statics"
import * as Methods from "./projects.methods"

// Design the schema in accordance with its types.
const ProjectSchema = new Schema({
  name: String,
  description: String,
  creationDate: Date,
  revisionDate: {
    type: Date,
    required: false,
  },
});

// Assign all static methods exported for a project.
Object.entries(Statics).forEach(([key, method]) => {
  ProjectSchema.statics[key] = method
})

// Assign all instance methods exported for a project.
Object.entries(Methods).forEach(([key, method]) => {
  ProjectSchema.methods[key] = method
})

export default ProjectSchema;
