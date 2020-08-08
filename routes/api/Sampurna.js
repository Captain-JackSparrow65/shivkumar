const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { check, validationResult } = require('express-validator/check');
const vidya = require('../../models/SampurnaVidya');

//uploads path folders functions and configs
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'avatar1') {
      cb(null, './upload/SAMPURNAVIDYA/adharCard/');
    } else if (file.fieldname === 'avatar2') {
      cb(null, './upload/SAMPURNAVIDYA/bankAC/');
    } else if (file.fieldname === 'avatar3') {
      cb(null, './upload/SAMPURNAVIDYA/castCertificate/');
    } else if (file.fieldname === 'avatar4') {
      cb(null, './upload/SAMPURNAVIDYA/collegeID/');
    } else if (file.fieldname === 'avatar5') {
      cb(null, './upload/SAMPURNAVIDYA/incomeCertificate/');
    } else if (file.fieldname === 'avatar6') {
      cb(null, './upload/SAMPURNAVIDYA/SSLC/');
    } else if (file.fieldname === 'avatar7') {
      cb(null, './upload/SAMPURNAVIDYA/PUC/');
    } else if (file.fieldname === 'avatar8') {
      cb(null, './upload/SAMPURNAVIDYA/lastSemUG/');
    } else if (file.fieldname === 'avatar9') {
      cb(null, './upload/SAMPURNAVIDYA/lastSemPG/');
    } else if (file.fieldname === 'avatar10') {
      cb(null, './upload/SAMPURNAVIDYA/userPhoto/');
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
    } else if (file.fieldname === 'avatar4') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'avatar5') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'avatar6') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'avatar7') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'avatar8') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'avatar9') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'avatar10') {
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
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar2') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar3') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar4') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar5') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar6') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar7') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar8') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar9') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'avatar10') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
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
    { name: 'avatar4', maxCount: 1 },
    { name: 'avatar5', maxCount: 1 },
    { name: 'avatar6', maxCount: 1 },
    { name: 'avatar7', maxCount: 1 },
    { name: 'avatar8', maxCount: 1 },
    { name: 'avatar9', maxCount: 1 },
    { name: 'avatar10', maxCount: 1 },
  ]),
  [
    check('fullname', 'fullname is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('permanentaddress', 'permanentaddress is required').not().isEmpty(),
    check('district', 'district is required').not().isEmpty(),
    check('city', 'city is required').not().isEmpty(),
    check('caste', 'caste is required').not().isEmpty(),
    check('gender', 'gender is required').not().isEmpty(),
    check('phone', 'phone is required').not().isEmpty(),
    check('zipcode', 'zipcode is required').not().isEmpty(),
    check('collegename', 'collegename is required').not().isEmpty(),
    check('university', 'university is required').not().isEmpty(),
    check('collegeaddress', 'collegeaddress is required').not().isEmpty(),
  ],
  async (req, res, next) => {
    console.log(req.file);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const vidya = new SampurnaVidya({
      _id: new mongoose.Types.ObjectId(),
      fullname: req.body.fullname,
      email: req.body.email,
      permanentaddress: req.body.permanentaddress,
      district: req.body.district,
      city: req.body.city,
      caste: req.body.caste,
      gender: req.body.gender,
      phone: req.body.phone,
      zipcode: req.body.zipcode,
      collegename: req.body.collegename,
      university: req.body.university,
      collegeaddress: req.body.collegeaddress,
      collegeID: req.files['avatar1'][0].path,
      incomeCertificate: req.files['avatar2'][0].path,
      casteCertificate: req.files['avatar3'][0].path,
      adharCard: req.files['avatar4'][0].path,
      bankDetails: req.files['avatar5'][0].path,
      photo: req.files['avatar6'][0].path,
      sslc: req.files['avatar7'][0].path,
      puc: req.files['avatar8'][0].path,
      UG: req.files['avatar9'][0].path,
      PG: req.files['avatar10'][0].path,
    });
    await vidya
      .save()
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
            caste: result.caste,
            gender: result.gender,
            phone: result.phone,
            zipcode: result.zipcode,
            collegename: result.collegename,
            university: result.university,
            collegeaddress: result.collegeaddress,
            collgeid: result.collegeID,
            income: result.incomeCertificate,
            castecertificate: result.casteCertificate,
            adharcard: result.adharCard,
            bank: result.bankDetails,
            photo: result.photo,
            sslc: result.sslc,
            puc: result.puc,
            UG: result.UG,
            PG: result.PG,
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
