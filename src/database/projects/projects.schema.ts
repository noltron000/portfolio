import { Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: String,
  description: String,
  creationDate: Date,
  revisionDate: {
    type: Date,
    required: false,
  },
});

export default ProjectSchema;
