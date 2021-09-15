import { connect, disconnect } from "../database/database";

(async () => {
  const db = connect();

  // test static methods
  const projects = await db.ProjectModel.findByAge();
  console.log(projects)

  // test retrieving data
  const existingProject = await db.ProjectModel.findOne({
    name: "AsyncRacing"
  })

  // test instance methods
  await existingProject.setRevisionDate();
  console.log(existingProject)

  disconnect();
})();
