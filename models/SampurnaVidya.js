const mongoose = require('mongoose');

const Sampurnavidya = mongoose.Schema({
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
  caste: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  course: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
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
  collegeID: {
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
  adharCard: {
    type: String,
    required: true,
  },
  bankDetails: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },
  sslc: {
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

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = SampurnaVidya = mongoose.model('sampurnavidya', Sampurnavidya);
