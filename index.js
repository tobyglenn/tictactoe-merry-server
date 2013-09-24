var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

// respond
app.use(function(req, res, next){
  res.render('tictactoe.html');
});

app.listen(process.env.VCAP_APP_PORT || 3000);