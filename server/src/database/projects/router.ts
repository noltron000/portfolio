import {Router} from "express";
import * as projectsController from "./controller"

const router = Router()

router.get('/projects', projectsController.index)
router.get('/projects/:id', projectsController.show)
router.post('/projects/create', projectsController.create)
router.post('/projects/:id/update', projectsController.update)
router.post('/projects/:id/delete', projectsController.delete)

export default router
