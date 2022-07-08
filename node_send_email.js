var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raju31730273@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'tarun31730273@gmail.com',
  to: 'viral.citrusbug@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Thatsdfjkdfjklfjklfsjklsdjkldfjklfsdfjkljklsdfjklsdfjklsdfjklsdfjkljklsdfjklsdfjklsdfjksdfjklsdfdlj was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 