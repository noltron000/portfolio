import { connect, disconnect } from "mongoose"
import { uri } from "../database.env"
import { ProjectModel } from '../database/projects/model'

(async () => {
  await connect(uri);

  // test static methods
  const projects = await ProjectModel.findByAge();
  console.info('projects', projects)

  // test retrieving data
  const existingProject = await ProjectModel.findOne({
    name: "AsyncRacing"
  })

  // test instance methods
  await existingProject.setRevisionDate();
  console.info('existingProject', existingProject)

  disconnect();
})();
