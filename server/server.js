console.log('app starts');
const path=require('path');
const express=require('express');
const app=express();
const  http=require('http');
var server=http.createServer(app);
const socketIo=require('socket.io');
//seting the public folder as static
const public=path.join(__dirname,'/../public');
app.use(express.static(public));
// seting pug as view engine
app.set('view engine','pug');
app.set('views',path.join(__dirname,'/../views'));
// setting websocket server
var io=socketIo(server);
io.on('connection',(socket)=>{
console.log('new user connected');
socket.on('disconnect',()=>{console.log('user disconnected');});
socket.emit('newEmail',{from:'fari',to:'abc',createdat:1233});
socket.on('createEmail',(email)=>{console.log('created email',email);});
socket.emit('newMessage',{from:'server',text:'hellow farakhanda iam server',createdat:1222});
socket.on('createMessage',(message)=>{console.log('massagecreated',message);});
});
// setting routes
app.get('/',(req,res)=>{
res.render('index');
});

var port=process.env.PORT||1000;
server.listen(port,()=>{
  console.log('server is up on port' + port);
});
