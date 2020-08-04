const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const { check, validationResult } = require('express-validator/check');
const Dhyanasagar = require('../../models/Dhyanasagar');

//uploads functions and configs
const storage = multer.diskStorage({
  // destination: './uploads/previousMarks',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
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
  upload.single('avatar'),
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
    const books = new Dhyanasagar({
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
      avatar: req.file.path,
    });
    books
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: 'Created data book successfully',
          createdBooks: {
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
            avatar: result.avatar,
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
