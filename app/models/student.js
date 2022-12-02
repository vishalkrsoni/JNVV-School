// import { Schema, model } from 'mongoose';
const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({
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
    require: true
  },
  parents: {
    type: Object,
    fathersName: '',
    mothersName: ''

  },
  rollNumber: {
    type: Number,
    required: true
  },
  currentClass: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  dateOfJoining: {
    type: Date,
    required: true
  },
  dateOfLeaving: {
    type: Date
  },
  assignedHouse: {
    type: String,
    required: true
  },
  isHouseCaptain: {
    type: Boolean,
    default: false,
  },
  isSchoolCaptain: {
    type: Boolean,
    default: false,
  },
  reportCard: {

  },
  documents: {

  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = model('Student', StudentSchema);
