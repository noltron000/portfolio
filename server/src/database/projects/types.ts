import { Document, Model } from "mongoose";

interface IProject {
	name: string;
	description: string;
	creationDate: Date;
	revisionDate?: Date;
}

interface IProjectDocument extends IProject, Document {
	setRevisionDate: (this: IProjectDocument) => Promise<void>;
}

interface IProjectModel extends Model<IProjectDocument> {
	findByAge: (before?: Date, after?: Date) => Promise<IProjectDocument>;
}

export {
	IProject,
	IProjectDocument,
	IProjectModel,
}
