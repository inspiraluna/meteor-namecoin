Meteor.methods({
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
});