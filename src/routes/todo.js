import express from 'express'
const router = express.Router()
import { getAllTitleController,createTitleController,updateTitleController,updateStatusController,deleteTitleController } from '../controller/todoController.js'

router.get('/',getAllTitleController)
router.post('/',createTitleController)
router.put('/:id',updateTitleController)
router.patch('/:id',updateStatusController)
router.delete('/:id/delete',deleteTitleController)

export default router;