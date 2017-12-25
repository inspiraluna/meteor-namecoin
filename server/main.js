import { Meteor } from 'meteor/meteor';

//import rpc from 'namecoin-rpc';
import namecoin from 'namecoin';

Meteor.startup(() => {

var namecoinRpcUsername = Meteor.settings.namecoinRpcUsername;
var namecoinRpcPassword = Meteor.settings.namecoinRpcPassword;
var namecoinRpcPort = Meteor.settings.namecoinRpcPort;
var namecoinRpcHost = Meteor.settings.namecoinRpcHost;

var client = new namecoin.Client({
  host: namecoinRpcHost,
  port: namecoinRpcPort,
  user: namecoinRpcUsername,
  pass: namecoinRpcPassword
});


client.getBlockCount(function(err, count) {
  if (err) return console.log(err);
  console.log('getBlockCount:', count);
});

/*
works!
client.importPrivKey('5KWBtwKuxdGLmHNLQxspukWUN3MbXxmauhMxj1x4dKfE2vxTYYj', 'paperwallet', true, function(err, result) {
  if (err) return console.log(err);
   console.log('importPrivKey:', result);
}); */

client.getBalance('*', 6, function(err, balance) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

client.getInfo(function(err, result) {
  if (err) return console.log('error:'+err);
  console.log('result:', result);
});

client.listAccounts(function(err, account) {
  if (err) return console.log(err);
   console.log('accounts:', account);
});

client.getAddressesByAccount('', function(err, addresses) {
  if (err) return console.log(err);
   console.log('addresses:', addresses);
});

 
});
