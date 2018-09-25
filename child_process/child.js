console.log('output from the child');

process.on('message', function (message) {
  console.log('message from parent: ' + JSON.stringify(message));
});

process.send({
  from: 'child'
});