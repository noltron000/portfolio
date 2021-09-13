import { Document, Model } from "mongoose";

interface IProject {
  name: string;
  description: string;
  creationDate: Date;
  revisionDate?: Date;
}

interface IProjectDocument extends IProject, Document {}
interface IProjectModel extends Model<IProjectDocument> {}

export {
  IProject,
  IProjectDocument,
  IProjectModel,
}
