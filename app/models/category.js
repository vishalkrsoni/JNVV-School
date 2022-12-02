const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = model('Category', CategorySchema);
