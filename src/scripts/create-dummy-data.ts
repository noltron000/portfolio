import { ProjectModel } from "../database/projects/projects.model"
import { connect, disconnect } from "../database/database"

(async () => {
  connect();

  const now = new Date(Date.now());
  const projects = [
    {
      name: "AsyncRacing",
      description: "A group project from CodeDay Labs",
      creationDate: now,
    },
    {
      name: "Cookie Clicker",
      description: "Front-end web track project",
      creationDate: now,
    },
    {
      name: "Rotten Potatoes",
      description: "A back-end web clone of the popular Rotten Tomatoes movie site.",
      creationDate: now,
    }
  ];

  try {
    for (const project of projects) {
      await ProjectModel.create(project);
      console.log(`Created project ${project.name}`);
    }

    disconnect();
  }
  catch (e) {
    console.error(e);
  }
})();
