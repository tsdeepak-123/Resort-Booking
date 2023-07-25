const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://DEEPAKTS:Tsdeepak589@loodieefasion.s7obwlv.mongodb.net/ResortBooking"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("DB Not connected");
  });
