// const { Schema, model } = require('mongoose');

// const validator = require('validator');


// const employeeSchema = new Schema({
//   emp_name: {
//     type: String,
//     minlength: 2,
//     maxlength: 50,
//     required: true,
//     validate: {
//       validator: function (val) {
//         let result = val.replace(/ /g, '');
//         return validator.isAlpha(result);
//       },
//       message: 'Name should contain only alphabets with or without spaces'
//     },
//     trim: true
//   },

//   job_name: {
//     type: String,
//     minlength: 2,
//     maxlength: 15,
//     required: true,
//     validate: {
//       validator: function (val) {
//         let result = val.replace(/ /g, '');
//         return validator.isAlpha(result);
//       },
//       message: 'only alphabets allowed'
//     },
//     trim: true
//   },

//   hire_date: {
//     type: Date,
//     default: Date.now()
//   },
//   salary: {
//     type: Number,
//     required: true
//   },
//   phone: {
//     type: String,
//     minlength: 10,
//     maxlength: 10,
//     required: [true, 'is required'],
//     // unique: [true, 'number already in use'],
//     trim: true
//   },
//   address: {
//     street: {
//       type: String,
//       minlength: 2,
//       maxlength: 30,
//       trim: true,
//     },
//     city: {
//       type: String,
//       minlength: 2,
//       maxlength: 20,
//       trim: true,
//     },
//     state: {
//       type: String,
//       minlength: 2,
//       maxlength: 20,
//       trim: true,
//     },
//     pin: {
//       type: Number,
//       minlength: 2,
//       maxlength: 8,
//       trim: true,
//     },
//   },


// },
//   { timestamps: true })

// const Employee = model('employee', employeeSchema)
// module.exports = Employee