import { model } from "mongoose";
import { IProjectDocument } from "./projects.types";
import ProjectSchema from "./projects.schema";

const ProjectModel = model<IProjectDocument>("project", ProjectSchema);

export {ProjectModel}
