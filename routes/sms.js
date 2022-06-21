var express = require('express');
var router = express.Router();
var MessagingResponse = require('twilio').twiml.MessagingResponse;


/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log("Request Headers:");
  console.log(req.headers);
  console.log("Request Body: ");
  console.log(req.body);

  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

module.exports = router;

