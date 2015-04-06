var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Serve assets in /public.
app.use(express.static(__dirname + '/public'));

// Allow POSTing JSON.
app.use(bodyParser.json());

// The editor interface.
app.get('/editor', function(req, res) {
  res.sendfile('./editor.html');
});

// The in-email representation.
app.post('/resolve', function(req, res) {
  var src = req.body.src;
  var width = req.body.width;

  if (!src || !width) {
    res.status(403 /* Unauthorized */ ).send('Missing parameters');
    return;
  }

  res.send('<img style="max-width:100%; box-sizing:border-box;" src="' + src + '" width="' + width + '"/>');
});

app.listen(process.env.PORT || 8045);
