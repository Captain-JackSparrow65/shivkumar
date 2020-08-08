const mongoose = require('mongoose');

const faacfc = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  caste: {
    type: String,
    required: true,
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
  // dateOfBirth: {
  //   type: Date,
  // },
  course: {
    type: String,
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
  percentage: {
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
  adharcard: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  puc: {
    type: String,
    required: true,
  },
  UG: {
    type: String,
    required: true,
  },
  PG: {
    type: String,
    required: true,
  },
  collegeID: {
    type: String,
    required: true,
  },
  bankDetails: {
    type: String,
    required: true,
  },
  incomeCertificate: {
    type: String,
    required: true,
  },
  casteCertificate: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = FaaFc = mongoose.model('FaacFc', faacfc);
