const validator = require('validator');
const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;
const familySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 150,
    validate: {
      validator: function (val) {
        let result = val.replace(/ /g, '');
        return validator.isAlpha(result);
      },
      message: 'Name should contain only alphabets with or without spaces'
    },
    trim: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
  },

  occupation: {
    type: String,
    min: 1,
    max: 500,
  },
  education: {
    type: String,
    minlength: 2,
    maxlength: 500,
    trim: true,
  },
  child: {
    type: ObjectId,
    ref: 'Student',
  },

  relation: {
    type: String,
    enum: ['Mother', 'Father', 'Sibling', 'Relative']
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
},
  { timestamps: true })

familySchema.pre('save', async function save(next) {
  this.increment();
  return next();
});

module.exports = model('Family', familySchema)