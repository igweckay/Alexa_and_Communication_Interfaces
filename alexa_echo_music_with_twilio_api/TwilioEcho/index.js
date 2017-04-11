// This code sample shows how to call and receive external rest service data, within your skill Lambda code.

// var AWS = require('aws-sdk');

var https = require('https');
var client = require('twilio')(
  'AC72c371869d087f73b39fcd26cdd40326',
  'ad5bc6de9faefc52a2dba6b45cd1dcac'
);

exports.handler = function( event, context ) {

    var response = {
        outputSpeech: {
            type: "PlainText",
            text: "Hi, my name is Alexa. I would like you to remember 3 words. The 3 words are niece, daughter, and mother. Again, the three words are niece, daughter, and mother."
        },
        shouldEndSession: true
    };
  //---------------------------------
  //Start
    var question_one = {
      outputSpeech:{
        type: "PlainText",
        text: "If Brooke is Karmen's sister and Karmen's daughter's name is Lexi. How is Lexi related to Brooke?"
      },
      shouldEndSession: true
    }
    var question_two = {
      outputSpeech:{
        type: "PlainText",
        text: "If Laura and Lexi are cousins and Lexi is Karmen's daughter, if Brooke and Karmen do not have any other siblings, who is Laura to Brooke?"
      },
      shouldEndSession: true
    }
    var question_three = {
      outputSpeech:{
        type: "PlainText",
        text: "If Tori is Samantha's younger sister, what is Samantha's relationship to Tori?"
      },
      shouldEndSession: true
    }
    var question_four = {
      outputSpeech:{
        type: "PlainText",
        text: "If Karmen is Hailey's grandmother, and Lexi is Karmen's daughter, who is Hailey to Lexi?"
      },
      shouldEndSession: true
    }
    var question_five = {
      outputSpeech:{
        type: "PlainText",
        text: "If Kris is Tori's mother, and Lexi and Tori are cousins, what is Lexi to Kris?"
      },
      shouldEndSession: true
    }
    var question_six = {
      outputSpeech:{
        type: "PlainText",
        text: "If Kris is Tori's mother, what is Kris to Tori?"
      },
      shouldEndSession: true
    }
  //End
  //---------------------------------
    client.messages.create({
      from: '+12817096689',
      to: '+12813006376',
      body: "You just sent an SMS from Node.js using Twilio!"
    }, function(err, message) {
      if(err) {
        say="Message Sent"
        console.error(err.message);
      }
      else {
        context.succeed( { response: response } );
      }
    });


};
