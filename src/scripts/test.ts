import { connect, disconnect } from "../database/database";
import {ProjectModel} from '../database/projects/projects.model'

(async () => {
  await connect();

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
