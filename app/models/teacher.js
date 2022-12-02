const { Schema, model } = require('mongoose');
const { text } = require('stream/consumers');

const TeacherSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
    trim: true
  },

  // image: {
  //   type: text,
  //   required: true
  // },
  dateOfBirth: {
    type: Date,
    // required: true
  },
  // phone: {
  //   type: Number,
  //   required: true
  // },
  // address: {
  //   type: String,
  //   required: true
  // },
  // staffId: {
  //   type: Number,
  //   required: true
  // },
  // subject: {
  //   type: Array
  // },
  designation: {
    type: String,
    minlength: 2,
    maxlength: 15,
    required: true,
    trim: true
  },

  dateOfJoining: {
    type: Date,
    default: Date.now()
  },

  dateOfLeaving:{
    type: Date,
    default: Date.now()
  },

  assignedHouse: {
    type: String,
  },

  // documents: {
  //   type: text
  // },
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
