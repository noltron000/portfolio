import { model } from "mongoose";
import { IProjectDocument, IProjectModel } from "./types";
import ProjectSchema from "./schema";

const ProjectModel = model<IProjectDocument>("project", ProjectSchema) as IProjectModel;

export {ProjectModel}
