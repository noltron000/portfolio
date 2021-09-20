import { model } from "mongoose";
import { IProjectDocument, IProjectModel } from "./projects.types";
import ProjectSchema from "./projects.schema";

const ProjectModel = model<IProjectDocument>("project", ProjectSchema) as IProjectModel;

export {ProjectModel}
