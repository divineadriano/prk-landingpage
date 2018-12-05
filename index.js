const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


var app = express();


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
	res.render('pages/kyc');
});

//kyc
app.get('/kyc', function(req, res) {
	res.render('pages/kyc');
});

//kyc
app.get('/try', function(req, res) {
	res.render('pages/try');
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
  

