var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
const db='mongodb://<db_user>:<db_pass>@ds139992.mlab.com:39992/<db_name>';
	mongoose.connect(db,err=>{
		if(err){
			console.log('database is not connected');
		}else{
			console.log('database is connected');
		}
	});
//default root page
router.get('/', function(req, res, next) {
    res.send('send from authapp api');
});
//registration page request api.
router.post('/register', function(req, res) {
	console.log(req.body);
    var userdata= req.body;
	var response={};
	var user=new User(userdata);
	user.save(function(err,registeruser){
		if(err){
			response={'type':'error','msg':err};
			res.send(response);
		}else{
			// res.status(200).send(registeruser);
			response={'type':'success','msg':'User is register Successfully'};
			res.send(response);
		}
	});
});
router.post('/login', function(req, res) {
    var userdata= req.body;	
	var response={};
	User.findOne({email:userdata.email},function(err,loginuser){
		if(err){
			response={'type':'error','msg':err};
			res.send(response);
		}else{
			if(!loginuser){
				response={'type':'error','msg':'Invalid user email'};
				//res.status(401).send(response);
				res.send(response);
			}else{
				if(userdata.password!==loginuser.password){
					response={'type':'error','msg':'Invalid user password'};
					res.send(response);
				}else{
					response={'type':'success','msg':'User is loggedIn Successfully'};
					// res.status(200).send(loginuser);
					res.send(response);
				}
			}
			
		}
	});
});

module.exports = router;