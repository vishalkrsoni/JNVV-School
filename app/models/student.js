// import { Schema, model } from 'mongoose';
const { BADHINTS } = require('dns');
const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;


const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // image: {
  //   type: image,
  //   required: true

  // },
  dateOfBirth: {
    type: Date,
    // require: true
  },
  gender:{
    type: String,
    enum: ['Male', 'Female'],
  },
  siblings: [{
    isMarried: Boolean,
    isMale: Boolean,
    isElder: Boolean,
  }],
  
  parents : [{
    type: ObjectId,
    ref: 'Family',
  }],
  rollNumber: {
    type: Number,
    // required: true
  },
  currentClass: {
    type: Number,
    // required: true
  },
  subjects: {
    type: Array,
    default: []
  },
  address: {
    type: String,
    // required: true
  },
  dateOfJoining: {
    type: Date,
    // required: true
  },
  dateOfLeaving: {
    type: Date
  },
  assignedHouse: {
    type: String,
    // required: true
  },
  isHouseCaptain: {
    type: Boolean,
    // default: false,
  },
  isSchoolCaptain: {
    type: Boolean,
    // default: false,
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
