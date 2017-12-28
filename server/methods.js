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
    });
}

function listAccounts(callback){
    client.listAccounts(function(err, accounts) {
        if (err) return console.log(err);
        console.log('accounts:', accounts);
        callback(null,accounts);
    });
}

function getAccountAddress(account, callback){
    client.getAccountAddress(account, function(err, address) {
        if (err) return console.log(err);
        console.log('address:', address);
        callback(null,address);
    });
}

function getTransaction(transaction, callback){
    client.getTransaction(transaction, function(err, transactions) {
        if (err) return console.log(err);
        console.log('transactions:', transactions);
        callback(null,transactions);
    });
}

function listTransactions(callback){
    client.listTransactions(function(err, transactions) {
        if (err) return console.log(err);
        console.log('transactions:', transactions);
        callback(null,transactions);
    });
}

function nameList(callback){
    client.nameList(function(err, names) {
        if (err) return console.log(err);
        console.log('nameList:', names);
        callback(null,names);
    });
}

//client.newName()
//client.nameUpdate
//client.nameFirstUpdate


var wrappedDelayedMessage = Async.wrap(delayedMessge);
var wrappedGetBlockCount = Async.wrap(getBlockCount);
var wrappedListAccounts = Async.wrap(listAccounts);
var wrappedGetAccountAddress = Async.wrap(getAccountAddress);
var wrappedGetTransaction = Async.wrap(getTransaction);
var wrappedListTransactions = Async.wrap(listTransactions);
var wrappedNameList = Async.wrap(nameList);

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
    },
    'listAccounts': function() {
        var accounts = wrappedListAccounts();
        console.log('accounts:'+JSON.stringify(accounts));
        return JSON.stringify(accounts);
    },
    'getAccountAddress':function (account) {
        var address = wrappedGetAccountAddress(account);
        return address;
    },
    'getTransaction':function(transaction){
        var transaction = wrappedGetTransaction(transaction);
        return JSON.stringify(transaction);
    },
    'listTransactions':function(account,count,skip,watchOnly){
      var transactions = wrappedListTransactions(); //"",10,0,false);//(account,count,skip,watchOnly);
      return transactions;
    },
    'nameList':function(){
        var names = wrappedNameList(); //"",10,0,false);//(account,count,skip,watchOnly);
        return names;
    }
});