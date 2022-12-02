const Teacher = require('../../models/teacher');

const getTeacher = async (req, res) => {
  try {
    let teachersList = await Teacher.find({})
    res.send({
      status: 'Details fetched successfully',
      total: teachersList.length,
      Teachers: teachersList
    })
  } catch (err) {
    res.send({
      status: 'error fetching details',
      message: err
    })
  }
}

const getTeacherById = async (req, res) => {
  const { staffId } = req.params
  try {
    const teacher = await Teacher.findById(staffId)
    if (!teacher) {
      res.status(404).send({
        status: 'error',
        msg: 'Teacher not found'
      })
    } else {
      res.send({
        status: 'success',
        Teacher: teacher
      })
    }
  } catch (err) {
    res.status(500).send({
      status: 'error',
      msg: 'Error fetching Teacher from DB'
    })
  }
}

const addTeacher = async (req, res) => {
  const staffData = req.body
  // console.log(staffData)

  try {
    const newStaff = await Teacher.create(staffData)
    // console.log(staffData)
    res.send({
      status: 'Added new user successfully',
      teacher: newStaff
    })
  } catch (err) {
    res.status(500).send({
      status: 'error occurred',
      msg: err
    })
  }
}

const updateTeacher = async (req, res) => {
  const { staffId } = req.params
  const updatedData = req.body
  console.log(staffId,updatedData)
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(staffId, updatedData, { new: true, runValidators: true })
    res.send({
      status: 'Updated details Successfully',
      updatedTeacher
    })
  } catch (err) {
    res.status(500).send({
      status: ' Some error occurred',
      msg: 'Cannot Update Teacher'
    })
  }
}

const deleteTeacher = async (req, res) => {
  const { staffId } = req.params
  console.log(staffId)
  try {
    const deletedStaff = await Teacher.findByIdAndDelete(staffId)
    res.send({
      status: 'Deleted Successfully',
      staff: deletedStaff
    })
  } catch (err) {
    res.status(500).send({
      status: 'Cannot delete internal error'
    })
  }
}


module.exports = {
  getTeacher,
  getTeacherById,
  addTeacher,
  updateTeacher,
  deleteTeacher
}