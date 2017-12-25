import { Template } from 'meteor/templating';

import './main.html';

Template.info.helpers({
    info : function() {
        return  ReactiveMethod.call('delayedEcho', ' frontend message ');
    },
    blockCount : function() {
        return  ReactiveMethod.call('getBlockCount');
    },
});

/*
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});*/
