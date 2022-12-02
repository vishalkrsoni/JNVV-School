const {
  getStudent,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
} = require('../Routes/Controllers/studentController');

// const {
//   authMiddleware,
//   isAdminMiddleware } = require('../Routes/Middlewares/authMiddleWare');

const { Router } = require('express')
const studentRouter = Router()

// studentRouter.use(authMiddleware)

// general routes
studentRouter.get('/', getStudent)
studentRouter.get('/:rollNumber', getStudentById)

// verified Routes
studentRouter.post('/', addStudent)
studentRouter.put('/:rollNumber', updateStudent)
studentRouter.delete('/:rollNumber', deleteStudent)

module.exports = studentRouter