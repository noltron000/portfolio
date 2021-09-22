import { ProjectModel } from './model'

/* GET ROUTES */
// Shows overview of many projects
const indexProjects = async (req, res) => {
	try {
		const projects = await ProjectModel.find()
		res.json(projects)
	}
	catch (err) {
		console.error(err)
	}
}

// Shows a single project in detail
const showProject = async (req, res) => {
	try {
		const {id} = req.params
		const project = await ProjectModel.findById(id)
		res.json(project)
	}
	catch (err) {
		console.error(err)
	}
}

/* POST ROUTES */
// Creates a new project entry
const createProject = async (req, res) => {
	try {
		const {
			name,
			description,
		} = req.body
		const now = new Date(Date.now())

		const project = new ProjectModel({
			name,
			description,
			creationDate: now,
		})

		await project.save()
		res.json(project)
	}
	catch (err) {
		console.error(err)
	}
}

// Updates an existing project entry
const updateProject = async (req, res) => {
	try {
		const {id} = req.params
		const {
			name,
			description,
		} = req.body
		const now = new Date(Date.now())

		const project = await ProjectModel.findById(id)
		project.name = name
		project.description = description
		project.revisionDate = now

		await project.save()
		res.json(project)
	}
	catch (err) {
		console.error(err)
	}
}

// Deletes an existing project entry
const deleteProject = async (req, res) => {
	try {
		const {id} = req.params

		await ProjectModel.findByIdAndDelete(id)
		res.status(200)
	}
	catch (err) {
		console.error(err)
	}
}

export {
	indexProjects as index,
	showProject as show,
	createProject as create,
	updateProject as update,
	deleteProject as delete,
}
