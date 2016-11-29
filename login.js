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
  resave: false,
  saveUninitialized: false,
  secret: 'apollo slackware propositional expectations'
}));

// configure view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

mongoose.connect('localhost:27017/');

var Schema = mongoose.Schema;

//user profile
var userSchema = new Schema({
	firstname: String,
	lastname: String,
  username: String,
  hashedPassword: String
}, {collection: 'User'});
var User = mongoose.model('User', userSchema);

//when the webpage is first opened, this page will show up by default
app.get('/',function(request, response){
  response.render('login',{title: 'Log in'});//this will open the login.pug
});

app.get('/main', function(request,response){
  var name=request.session.username;

   response.render('main_page',{username: "Welcome "+name});
});

app.get('/movie', function(request,response){
  var name=request.session.username;

   response.render('Movie',{username: "Welcome "+name});
});
app.get('/playing', function(request,response){
  var name=request.session.username;
  response.render('Now_playing',{username: "Welcome "+name});
});

app.get('/boxoffice', function(request,response){
  var name=request.session.username;
  response.render('boxoffice',{username: "Welcome "+name});
});

app.get('/chat', function(request,response){
  var name=request.session.username;
  response.render('chat',{username: "Welcome "+name, Uname: name});
});

app.get('/featuredreviews', function(request,response){
  var name=request.session.username;
  response.render('featuredreviews',{username: "Welcome "+name});
});

app.get('/messageboard', function(request,response){
  var name=request.session.username;
  response.render('messageboard',{username: name});
});

app.post('/processLogin', function(request, response) {
  var username = request.body.username;
  var password = request.body.password;

  User.find({username: username}).then(function(results){
    if (results.length>0 && bcrypt.compareSync(password, results[0].hashedPassword)){
      // store the username in the session
      request.session.username = username;

      // redirect to main page
      response.render('main_page',{username: "Welcome "+username});

    }else{
      // show the login page again, with an error message
      response.render('login', {errorMessage: 'Login Incorrect'});
    }
  });
});

//go to register page if user clicks register
app.post('/openRegister', function(request, response){
  response.render('register',{title: 'Register'});
});


app.post('/processRegistration', function(request, response) {

  var username = request.body.username;
  var firstname=request.body.firstName;
  var lastname=request.body.lastName;
  var password = request.body.password;

  var hashedPwd = bcrypt.hashSync(password);

//for user data
  var newUser={username: username,
                        firstname: firstname,
                        lastname: lastname,
                        hashedPassword: hashedPwd};

  User.find({username: username}).then(function(results){
    if (results.length>0) {//if username already exists in database
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

          response.render('main_page',{username: "Welcome "+username});

        }
      });

    }
  });
});

app.post('/logout',function(request,response){
  request.session.username='';
  response.render('login',{errorMessage: "You have successfully logged out."});
});

// setup the HTTP listener
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'))
})
