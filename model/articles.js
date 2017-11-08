const mongoose=require('mongoose');
mongoose.promises=global.promises;
try{
	mongoose.connect('mongod://localhost:27017/myarticles');

}catch(e){
console.log(e);
}
var db=mongoose.connection;
var articleschema= new mongoose.Schema({
title:{
	type:String,
	require:true
},
author:{
	type:String,
	require:true
},
body:{
	type:String,
	require:true
	}

});
let article=mongoose.model('article',articleschema);
module.export={
	article
}
