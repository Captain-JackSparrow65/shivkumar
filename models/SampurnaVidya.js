const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  permanentaddress: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  collegename: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  collegeaddress: {
    type: String,
    required: true,
  },
  bookname: {
    type: String,
    required: true,
  },
  bookauthor: {
    type: String,
    required: true,
  },
  bookedition: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  collgeID: {
    type: String,
  },
  adharcard: {
    type: String,
  },
  marks: {
    type: String,
  },
});
module.exports = sampurnaVidya = mongoose.model('SampurnaVidya', BookSchema);
