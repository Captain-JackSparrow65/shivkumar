const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { check, validationResult } = require('express-validator/check');
const SampurnaVidya = require('../../models/SampurnaVidya');

//uploads functions and configs
const storage = multer.diskStorage({
  // destination: 'upload/collegeID/',
  destination: function (req, file, cb) {
    if (file.fieldname === 'avatar1') {
      cb(null, './upload/adharCard/');
    } else if (file.fieldname === 'avatar2') {
      cb(null, './upload/admissionLetter/');
    } else if (file.fieldname === 'avatar3') {
      cb(null, './upload/collegeID/');
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === 'avatar1') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'avatar2') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'avatar3') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    }
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.fieldname === 'avatar1') {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } else if (file.fieldname === 'avatar2') {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } else if (file.fieldname === 'avatar3') {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post(
  '/',
  upload.fields([
    { name: 'avatar1', maxCount: 1 },
    { name: 'avatar2', maxCount: 1 },
    { name: 'avatar3', maxCount: 1 },
  ]),
  [
    check('fullname', 'fullname is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('permanentaddress', 'permanentaddress is required').not().isEmpty(),
    check('district', 'district is required').not().isEmpty(),
    check('city', 'city is required').not().isEmpty(),
    check('zipcode', 'zipcode is required').not().isEmpty(),
    check('collegename', 'collegename is required').not().isEmpty(),
    check('university', 'university is required').not().isEmpty(),
    check('collegeaddress', 'collegeaddress is required').not().isEmpty(),
    check('bookname', 'bookname is required').not().isEmpty(),
    check('bookauthor', 'bookauthor is required').not().isEmpty(),
    check('bookedition', 'bookedition is required').not().isEmpty(),
  ],
  (req, res, next) => {
    console.log(req.file);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const Sampurna = new sampurnaVidya({
      _id: new mongoose.Types.ObjectId(),
      fullname: req.body.fullname,
      email: req.body.email,
      permanentaddress: req.body.permanentaddress,
      district: req.body.district,
      city: req.body.city,
      zipcode: req.body.zipcode,
      collegename: req.body.collegename,
      university: req.body.university,
      collegeaddress: req.body.collegeaddress,
      bookname: req.body.bookname,
      bookauthor: req.body.bookauthor,
      bookedition: req.body.bookedition,
      collgeID: req.files['avatar1'][0].path,
      adharcard: req.files['avatar2'][0].path,
      marks: req.files['avatar3'][0].path,
    });
    Sampurna.save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: 'Created data book successfully',
          sampurnavidya: {
            fullname: result.fullname,
            email: result.email,
            permanentaddress: result.permanentaddress,
            district: result.district,
            city: result.city,
            zipcode: result.zipcode,
            collegename: result.collegename,
            university: result.university,
            collegeaddress: result.collegeaddress,
            bookname: result.bookname,
            bookauthor: result.bookauthor,
            bookedition: result.bookedition,
            collgeID: result.collgeID,
            adharcard: result.adharcard,
            marks: result.marks,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  }
);

module.exports = router;
