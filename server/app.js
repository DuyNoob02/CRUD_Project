//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
// const session = require('express-session')

//lib for login

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static("uploads"));

//router
app.use("/api/post", require('./routes/routes.js'));
app.use("/user", require('./routes/users.route.js'));


//connect to database
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to the database!!'))
    .catch((err) => console.log(err));


//start server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));




