const Student = require('../../models/student');

const getStudent = async (req, res) => {
  try {
    let studentsList = await Student.find({})
    res.send({
      status: 'Details fetched successfully',
      total: studentsList.length,
      studentsList
    })
  } catch (err) {
    res.send({
      status: 'error fetching details',
      message: err
    })
  }
}

const getStudentById = async (req, res) => {
  const { rollNumber } = req.params
  try {
    const student = await Student.findById(rollNumber)
    if (!Student) {
      res.status(404).send({
        status: 'error',
        msg: 'Student not found'
      })
    } else {
      res.send({
        status: 'success',
        student
      })
    }
  } catch (err) {
    res.status(500).send({
      status: 'error',
      msg: 'Error fetching Student from DB'
    })
  }
}

const addStudent = async (req, res) => {
  const studentData = req.body
  try {
    const newStudent = await Student.create(studentData)
    res.send({
      status: 'Added new student successfully',
      Student: newStudent
    })
  } catch (err) {
    res.status(500).send({
      status: 'error occurred',
      msg: err
    })
  }
}

const updateStudent = async (req, res) => {
  const { rollNumber } = req.params
  const updatedData = req.body
  try {
    const updatedStudent = await Student.findByIdAndUpdate(rollNumber, updatedData, { new: true, runValidators: true })
    res.send({
      status: 'Updated details Successfully',
      updatedStudent
    })
  } catch (err) {
    res.status(500).send({
      status: ' Some error occurred',
      msg: 'Cannot Update Student'
    })
  }
}

const deleteStudent = async (req, res) => {
  const { rollNumber } = req.params
  console.log(rollNumber)
  try {
    const student = await Student.findByIdAndDelete(rollNumber)
    res.send({
      status: 'Deleted Successfully',
      student
    })
  } catch (err) {
    res.status(500).send({
      status: 'Cannot delete internal error'
    })
  }
}


module.exports = {
  getStudent,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
}