var socket=io();

socket.on('connect',function(){
console.log('conneted to server');
socket.emit('createMessage',{from:'farakhanda',text:'hellow to server'});
});
socket.on('newMessage',function(newmail){console.log('new message',newmail);});
socket.on('newEmail',function(email){console.log('new email',email);});
socket.on('disconnect',function(){console.log('disconnected to server');});
