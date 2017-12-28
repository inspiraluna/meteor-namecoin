import { Template } from 'meteor/templating';

import './main.html';

Template.info.helpers({
    info : function() {
        return  ReactiveMethod.call('delayedEcho', ' frontend message ');
    },
    blockCount : function() {
        return  ReactiveMethod.call('getBlockCount');
    },
    listAccounts : function() {
        return  ReactiveMethod.call('listAccounts');
    },
    getAccountAddress : function() {
        return  ReactiveMethod.call('getAccountAddress','');
    },
    getTransaction : function(){
        return ReactiveMethod.call('getTransaction','d434ff01b079b8f790a774282ac9c45bfce60f9571b63004625f0d20efad1742');
    },
    listTransactions : function(){
        return ReactiveMethod.call('listTransactions','*',10,false);
    },
    nameList : function(){
        return ReactiveMethod.call('nameList');
    }
});

