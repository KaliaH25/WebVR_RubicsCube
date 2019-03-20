const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
//websocket library
const socketIO  = require('socket.io')(server);

const LISTEN_PORT = 8080;
//set default directory for http requests
app.use( express.static(__dirname +'/public') );

//http routes
app.get('/index',function (req, res){
    res.sendFile(__dirname +'/public/index.html');
});



socketIO.on('connection',function(socket){
    //listen for connection event from client then do some stuff
    console.log(socket.id + ' connected!');
    
    socket.on('disconnect',function(){
        console.log(socket.id +' disconnected');
    });
    
       
});
    
//start server
server.listen(LISTEN_PORT);
console.log('Listening on port: '+LISTEN_PORT);