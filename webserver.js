var express = require('express')
var app = express()
const util = require('util')

// parser for POST method
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

// using the EJS templates
app.set('view engine', 'ejs');
app.use(express.static('public'));

var submissions_array = [];

app.post('/formpost', function (req, res) {
  var submission = req.body.response;
  // console.log("They submitted: " + submission);
  //console.log(submission)
  //console.log('In Search of ' + submission[0] + 'I found ' + submission[1])
  // res.render always looks in the views folder
  // response is the name from the ejs confirmation page
  // submission is the actual data that you're sending
  res.render('confirmation.ejs',{response1: submission[0], response2: submission[1]})
  // save into an array
  submissions_array.push(submission);
})

app.get('/display', function(req, res) {
  // res.render always looks in the views folder
  // submissions_on_page is the name from the ejs display page
  // submissions array, actual data that you're sending
  res.render('display.ejs',{submissions_on_page:submissions_array})
})

// listening port
app.listen(7000, function () {
  console.log('App listening on port 7000!')
})
