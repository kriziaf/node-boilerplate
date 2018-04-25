var express = require('express')
var app = express();
var mongoose = require('mongoose');
const util = require('util');
var env = require('node-env-file');

// our db model
var Submission = require("./models/model.js");

// if in development mode, load .env variables
if (app.get("env") === "development") {
    env(__dirname + '/.env');
}

app.db = mongoose.connect(process.env.MONGODB_URI);

// parser for POST method
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

// using the EJS templates
app.set('view engine', 'ejs');
app.use(express.static('public'));

var submissions_array = [];

app.post('/formpost', function (req, res) {
  var response1 = req.body.response1;
  var response2 = req.body.response2;

  var dataToSave = {
    response1: response1,
    response2: response2
  }

  var newSubmission = new Submission(dataToSave)

  newSubmission.save(function(err,savedSubmission){

    if(err){
      console.log('we got error');
      return res.json (err);
    }

    console.log("we saved a new submission to DB --> " + savedSubmission);
    res.render('confirmation.ejs',savedSubmission);
    //res.render('confirmation.ejs',{response1: submission[0], response2: submission[1]})
    //submissions_array.push(submission);
  })
  // console.log("They submitted: " + submission);
  //console.log(submission)
  //console.log('In Search of ' + submission[0] + 'I found ' + submission[1])
  // res.render always looks in the views folder
  // response is the name from the ejs confirmation page
  // submission is the actual data that you're sending
  //res.render('confirmation.ejs',{response1: submission[0], response2: submission[1]})
  // save into an array
  //submissions_array.push(submission);
})

app.get('/display', function(req, res) {
  // res.render always looks in the views folder
  // submissions_on_page is the name from the ejs display page
  // submissions array, actual data that you're sending
  Submission.find(function(err,submissionsData){

    if(err) return res.json(err);
    console.log('we got the data --> ' + submissionsData);

    res.render('display.ejs',{submissions_on_page:submissionsData})
  })
})

// listening port
app.listen(7000, function () {
  console.log('App listening on port 7000!')
})
