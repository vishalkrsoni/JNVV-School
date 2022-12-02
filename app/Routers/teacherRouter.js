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
teacherRouter.get('/teacher', getTeacher)
teacherRouter.get('/teacher/:staffId', getTeacherById)

// verified Routes
teacherRouter.post('/teacher', addTeacher)
teacherRouter.put('/teacher:staffId', updateTeacher)
teacherRouter.delete('/teacher:staffId', deleteTeacher)

module.exports = teacherRouter