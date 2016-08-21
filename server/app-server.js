var express = require("express");
var app = express();
var token = {};
var config = require("./config");
var path = require("path");

var oauth2 = require('simple-oauth2')({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  site: 'https://github.com/login',
  tokenPath: '/oauth/access_token',
  authorizationPath: '/oauth/authorize'
});
// Authorization uri definition
var authorization_uri = oauth2.authCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/callback',
  scope: 'notifications',
  state: '3(#0/!~'
});

// Initial page redirecting to Github
app.get('/auth', function (req, res) {
    res.redirect(authorization_uri);
});

// Callback service parsing the authorization token and asking for the access token
app.get('/callback', function (req, res) {
  var code = req.query.code;
  oauth2.authCode.getToken({
    code: code,
    redirect_uri: 'http://localhost:3000/callback'
  }, saveToken);
 
  function saveToken(error, result) {
    if (error) { console.log('Access Token Error', error.message); }
    result = {
    'access_token': result.split('=')[1].split('&')[0],
    'expires_in': '909009090'
    };
    token = oauth2.accessToken.create(result); 
    console.log(token);
  }
  res.sendFile(path.resolve((__dirname + '/../app' + '/index.html')));
  console.error(token);
});


app.get('/', function (req, res) {
  res.send('Hello<br><a href="/auth">Log in with Github</a>');
});



app.use('/public', express.static(__dirname + '/../app/public'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

app.listen(3000, function() {
	console.log("Listening on 3000 port.")
});