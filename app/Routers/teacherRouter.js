const {
  getTeacher,
  getTeacherById,
  addTeacher,
  updateTeacher,
  deleteTeacher
} = require('../Routes/Controllers/teacherController');

// const {
//   authMiddleware,
//   isAdminMiddleware } = require('../Routes/Middlewares/authMiddleWare');

const { Router } = require('express')
const teacherRouter = Router()

// teacherRouter.use(authMiddleware)

// general routes
teacherRouter.get('/', getTeacher)
teacherRouter.get('/:staffId', getTeacherById)

// verified Routes
teacherRouter.post('/', addTeacher)
teacherRouter.put('/:staffId', updateTeacher)
teacherRouter.delete('/:staffId', deleteTeacher)

module.exports = teacherRouter