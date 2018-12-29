var restify = require('restify');
var builder = require('botbuilder');
var express = require('express');

var app = express()

// new builder.ChatConnector works only with botbuilder version 3.13.3
var connector = new builder.ChatConnector({

});


// Updated version is  BotFrameworkAdapter
// var connector = new builder.BotFrameworkAdapter({
//
// });


// Receive messages from the user and respond
var bot = new builder.UniversalBot(connector, function(session) {
    session.send("You said: %s", session.message.text);
});

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978 , function() { //3978
    console.log('%s listening to %s', server.name, server.url);
});


// Listen for messages from users
server.post('/api/messages', connector.listen());
