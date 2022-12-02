const { Schema, model } = require('mongoose');

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: image,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  staffId: {
    type: Number,
    required: true
  },
  subject: {
    type: Array
  },
  designation: {
    type: String
  },
  dateOfJoining: {
    type: Date,
    required: true
  },
  dateOfLeaving: {
    type: Date,
  },
  assignedHouse: {
    type: String,
  },
  documents: {
    type: document
  },
  isHouseMaster: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = model('Teacher', TeacherSchema);
