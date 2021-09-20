import { IProjectDocument } from "./projects.types";

async function setRevisionDate(
  this: IProjectDocument
): Promise<void> {
  // Gather the current date-time.
  const now = new Date();

  // The new revision date should be more recent.
  if (!this.revisionDate ?? this.revisionDate < now) {
    this.revisionDate = now;
    await this.save();
  }
}

export {setRevisionDate}
