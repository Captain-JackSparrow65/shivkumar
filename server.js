const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();
connectDB();

//init middleware
// app.use(express.json({ extended: true }));
app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// define routes
app.use('/api/books', require('./routes/api/books'));
app.use('/api/hostel', require('./routes/api/Hostel'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
