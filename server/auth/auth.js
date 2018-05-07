var {User} =require('../models/users');

var authenticate = (req,res,next) =>{

  var token = req.header('x-auth');
  User.findByToken(token).then((user) =>{
    if(!user){
      console.log("user not auth");
      return Promise.reject();
  }
  req.user=user;
  req.token=token;
  console.log("user auth");
  next();
  }).catch(()=>{
    res.status(401).send();
  });
};

module.exports ={authenticate };
