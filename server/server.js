console.log('app starts');
const path=require('path');
const express=require('express');
const app=express();
//seting the public folder as static
const public=path.join(__dirname,'/../public');
app.use(express.static(public));
// seting pug as view engine
app.set('view engine','pug');
app.set('views',path.join(__dirname,'/../views'));

app.get('/',(req,res)=>{
res.render('index');
});
var port=process.env.PORT|| 3000;
app.listen(port,()=>{
console.log('server is up on port'+ port);
});