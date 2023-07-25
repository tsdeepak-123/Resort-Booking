const nodemailer = require("nodemailer");

const sendVerification = async (Name, Email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "trensdonline321@gmail.com",
        pass: "nhafzvymvldqdbbs",
      },
    });
    const mailOption = {
      from: "trendsonline321@gmail.com",
      to: Email,
      subject: "for verification mail",
      html:
        "<p>Hii," +
        Name +
        ",Your otp for login is <h1>" +
        otp +
        "</h1></p>",
    };
    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("email send", info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};



module.exports={sendVerification}
