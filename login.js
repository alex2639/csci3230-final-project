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
app.use(express.static('public'));

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

mongoose.connect('localhost:27017/');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: String,
	lastName: String,
  username: String,
  hashedPassword: String
}, {collection: 'User'});
var User = mongoose.model('User', userSchema);

app.get('/',function(request, response){
  response.render('login',{title: 'Log in'});//this will open the login.pug
});

app.post('/processLogin', function(request, response) {
  console.log('form submitted: ' + request.body);
  var username = request.body.username;
  var password = request.body.password;

  User.find({username: username}).then(function(results){
    if (results.length>0 && bcrypt.compareSync(password, results[0].hashedPassword)){
      // store the username in the session
      request.session.username = username;

      // redirect to main page
      response.writeHead(301,{Location: 'main_page.html'});
      response.end();

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
  var firstname=request.body.firstname;
  var lastname=request.body.lastname;
  var password = request.body.password;

  var hashedPwd = bcrypt.hashSync(password);

  var newUser={username: username,
                        firstname: firstname,
                        lastname: lastname,
                        hashedPassword: hashedPwd};

  User.find({username: username}).then(function(results){
    if (results.length>0) {
      response.render('register',{errorMessage:'Username taken'});
    }else{
      var user=new User(newUser);
      user.save(function(error){
        if (error){
          console.log('registration error: '+error);
          response.render('register', {errorMessage: 'Unable to register.'})
        }else{
          request.session.username =username;
          request.session.save();

          response.writeHead(301,{Location: 'main_page.html'});
          response.end();
        }
      });

    }
  });
});

// setup the HTTP listener
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'))
})
