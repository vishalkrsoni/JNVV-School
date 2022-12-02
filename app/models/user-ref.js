const mongoose = require('mongoose');
const validator = require('validator');

const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

const { identitySchema, preferenceSchema } = require('./sub_schemas');

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: [true, 'is required'],
    unique: [true, 'Phone already in use'],
    trim: true
  },
  country_code: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
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
    type : String,
  },
  categories: {
    type: Array
  },
  interests: {
    type: Array
  },
  connected_users: {
    type: Array
  },
  profile_viewed_by: {
    type: Array
  },
  dob: {
    type: Date,
    trim: true
  },
  height: {
    type: Number,
    min: 1,
    max: 500
  },
  bio: {
    type: String,
    minlength: 2,
    maxlength: 500,
    trim: true
  },
  proof_of_identity: identitySchema,
  profile_verified: {
    type: Boolean,
    default: false
  },
  profile_images: {
    type: Array
  },
  preferences: preferenceSchema,
  profile_completion: {
    type: Number,
    default: 0
  },
  family: {
    type: ObjectId,
    ref: 'Family',
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  blockedUsers : [{
    type: ObjectId,
    ref: 'User',
  }], 
  token: {
    type: String
  },
  creationip: {
    type: String,
    required: [true, 'is required']
  },
  updationip: {
    type: String
  },
}, { timestamps: true })

userSchema.pre('save', async function save(next) {
  this.increment();
  return next();
});

module.exports = mongoose.model('User', userSchema)