
const validator = require('validator');

const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

const { nodeKeyToRedisOptions } = require('ioredis/built/cluster/util');

const familySchema = new mongoose.Schema({
  father_name: {
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

  father_job: {
    type: String,
    min: 1,
    max: 500,
  },

  father_education: {
    type: String,
    minlength: 2,
    maxlength: 500,
    trim: true,
  },

  mother_name: {
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
  
  mother_job: {
    type: String,
    min: 1,
    max: 500,
  },
  
  mother_education: {
    type: String,
    minlength: 2,
    maxlength: 500,
    trim: true,
  },
  
  siblings: [{
    isMarried: Boolean,
    isMale: Boolean,
    isElder: Boolean,
  }],
  
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