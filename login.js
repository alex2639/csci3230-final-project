//javascript
// library/package imports
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt=require('bcrypt-nodejs')
var uuid = require('node-uuid');
var mongoose=require('mongoose')

// body parser (parses URL-encoded body content)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('styles'));

app.set('port', process.env.PORT || 3000)

// session (parses session IDs and loads data)
app.use(session({
  genid: function(request) { return uuid.v4(); },
  resave: false /* save only when changes */,
  saveUninitialized: false /* save only when data */,
  /*cookie: { secure: true; },*/
  secret: 'apollo slackware propositional expectations'
}));

// configure view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/',function(request, response){
  response.render('login',{title: 'Log in'});//this will open the login.pug
});

//var usernames=[];

app.post('/processLogin', function(request, response) {
  console.log('form submitted: ' + request.body);
  var username = request.body.username;
  var password = request.body.password;

  User.find({username: username}).then(function(results){
    if (results.length>0 && bcrypt.compareSync(password, results[0].hashedPassword)){
      // store the username in the session
      request.session.username = username;

      // redirect to main page
      //response.redirect('main_page.html');
      window.location.href="main_page.html";
    }else{
      // show the login page again, with an error msg
      response.render('login', {errorMessage: 'Login Incorrect'});
    }
  });
});

app.post('/openRegister', function(request, response){
  response.render('register',{title: 'Register'});
});

app.post('/processRegistration', function(request, response) {
  console.log('register form submitted: ' + request.body);

  var username = request.body.username;
  var password = request.body.password;

  var hashedPwd = bcrypt.hashSync(password);

  //var newUser=new User({username: username,
  //                      hashedPassword: hashedPwd});

  newUser.save(function(error){
    if (error){
      console.log('registration error: '+error);
      response.render('register', {errorMessage: 'Unable to register.'})
    }else{
      request.session.username =username;
      request.session.save();
      //response.render('main_page.html', {username: username});
      window.location.href="main_page.html";
    }
  });

  function userExists(username){
    
  }

  if (userExists(username)) {
    // show the register page again, with an error msg
    response.render('register', {errorMessage: 'Username already taken'});
  } else {
    // remember the username
    usernames.push(username);

    // store the username in the session
    request.session.username = username;

    // redirect to the index
    response.redirect('/');
  }
});

// setup the HTTP listener
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'))
})
