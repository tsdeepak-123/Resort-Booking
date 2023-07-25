const express = require('express');
const app = express();
const path = require("path");
require("dotenv");
const cors = require("cors");
require('./config/connection')
const session = require("express-session")
const userRoute = require("./routes/user");
const partnerRoute = require("./routes/partner");
const adminRoute = require("./routes/admin");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(
  session({
    secret:'deepak',
    saveUninitialized: true,
    cookie: { maxAge: 600000 },
    resave: false,
  })
);

app.use('/',userRoute)
app.use('/partner',partnerRoute)
app.use('/admin',adminRoute)

app.listen(5001, () => {
  console.log(`server running on 5001`);
});
