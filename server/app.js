var express = require('express'),
	app	= express(),
	server = require('http').createServer(app),
	path = require('path'),
	bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
	res.render('home')
})

app.get('/register', function(req,res){
	res.render('register')
})

var users = []

app.post('/register', function(req,res){
	users.push(req.body);
	console.log(users)
	res.render('login')
})

app.get('/login', function(req,res){
	res.render('login')
})

var dataFromOurDatabase = [{
	"username": "Sally Universe",
	"url": "https://lh3.googleusercontent.com/K3UdS0t311DpKIiq614Ix6cRanFYxueEFaLF3T0bPQLGcJtqzw5ps3ClI85nK7jB4ElbKBs8xg=s640-h400-e365",
	"about": "I'm infinite and scary as fuck!"}]

app.get('/profile', function(req, res){
res.render('profile', {userData: dataFromOurDatabase})})

app.post('/login', function(req, res){
	var loginName = req.body.username;
	var userPassword = req.body.password;
	for(i = 0; i < users.length; i++){
		if(loginName === users[i].username){
			userPassword === users[i].password
				res.send('success')

				}
			}
	res.send('failure')
})
















server.listen(3000, function(){
	console.log('Server is running on port 3000')
})