module.exports = function(req, res) {
  console.log('req.body', req.body)
  var data = JSON.parse(req.body.params);
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }

  var width = data.width > 600 ? 600 : data.width;
  var html = '<p><img style="max-width:100%;" src="' + data.src + '" width="' + width + '"/></p>';
  res.json({
    body: html
  });
};
