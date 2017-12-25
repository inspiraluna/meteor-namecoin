import namecoin from "namecoin";
import {Meteor} from "meteor/meteor";

var namecoinRpcUsername = Meteor.settings.namecoinRpcUsername;
var namecoinRpcPassword = Meteor.settings.namecoinRpcPassword;
var namecoinRpcPort = Meteor.settings.namecoinRpcPort;
var namecoinRpcHost = Meteor.settings.namecoinRpcHost;

client = new namecoin.Client({
    host: namecoinRpcHost,
    port: namecoinRpcPort,
    user: namecoinRpcUsername,
    pass: namecoinRpcPassword
});


//declare a simple async function
function delayedMessge(delay, message, callback) {
    setTimeout(function() {
        console.log(' deloayed message..'+message);
        callback(null, message);
    }, delay);
}

function getBlockCount(callback){
    client.getBlockCount(function(err, count) {
        if (err) return console.log(err);
        console.log('getBlockCount:', count);
        callback(null,count);
       // return count;
    });
}
//wrapping
var wrappedDelayedMessage = Async.wrap(delayedMessge);
var wrappedGetBlockCount = Async.wrap(getBlockCount);

//usage
Meteor.methods({
    'delayedEcho': function(message) {
        var response = wrappedDelayedMessage(500, message);
        console.log('response:'+response);
        return response;
    },
    'getBlockCount': function() {
        var count = wrappedGetBlockCount();
        console.log('count:'+count);
        return count;
    }
});

/*


client.getBlockCount(function(err, count) {
    if (err) return console.log(err);
    console.log('getBlockCount:', count);
    return count;
});

Meteor.methods({

    'getInfo'(message) {

        var response = wrappedDelayedMessage(500, message);
        return response;
    },
  'getBlockCount'() {
   
        client.getBlockCount(function(err, count) {
          if (err) return console.log(err);
          console.log('getBlockCount:', count);
          return count;
        });
    
  },
   'getBalance'({ todoId, newText }) {
   
      client.getBalance('*', 6, function(err, balance) {
        if (err) return console.log(err);
        console.log('Balance:', balance);
        return count;
      });
    
  }
});*/