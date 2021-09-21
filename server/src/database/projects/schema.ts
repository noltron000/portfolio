import { Schema } from "mongoose";
import { findByAge } from "./statics"
import { setRevisionDate } from "./methods"

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
ProjectSchema.statics.findByAge = findByAge

// Assign all instance methods exported for a project.
ProjectSchema.methods.setRevisionDate = setRevisionDate

export default ProjectSchema;
