// This code sample shows how to call and receive external rest service data, within your skill Lambda code.

// var AWS = require('aws-sdk');

var https = require('https');
var client = require('twilio')(
  'AC72c371869d087f73b39fcd26cdd40326',
  'ad5bc6de9faefc52a2dba6b45cd1dcac'
);




                client.messages.create({
                  from: '+12817096689',
                  to: '+12813006376',
                  body: "You just sent an SMS from Node.js using Twilio!"
                }, function(err, message) {
                  if(err) {
                    say="Message Sent"
                    console.error(err.message);
                  }
                });
