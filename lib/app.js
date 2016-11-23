var hl7    = require('simple-hl7');
var server = hl7.Server;
 
var tcpServer  = server.createTcpServer();
 
tcpServer.on('msg', function(msg) {
  //msg is a Message object from "simple-hl7". see simple-hl7 on npm/github for API 
 
  //do something with message 
  console.log(msg.toString());
 
  //ACKs handled automatically, so don't worry about them. 
  //API for custom ACKS coming in the future 
});
 
tcpServer.start(6000) //port number 
console.log("HL7 server is listening on port 58189");
 