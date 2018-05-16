var express = require('express');
var _ =require('lodash');
var {User} = require('../models/users');
var {authenticate} = require('../auth/auth');

var userRouter = express.Router();

userRouter.post('/register', (req,res) => {
    var body= _.pick(req.body , ['email' , 'password','name','surname','address','phone',]);
  var user = new User(body);
  console.log(body);
  console.log(user);
  user.save(user).then((user) => {

      return user.generateAuthToken();
  }).then((token) => {
    var userData={
        token: token,
        user: user
    };
  res.header('x-auth',token).send(userData);
}).catch((e) => {

  res.status(400).send(e);
})


});
userRouter.post('/login' , (req ,res ) => {
    var body= _.pick(req.body , ['email' , 'password']);

     console.log(body);
    User.FindByCredentials(body.email , body.password ).then((user) => {
      user.DeleteOutdatedToken().then((res)=>{console.log(res);});
      return user.generateAuthToken().then((token) => {
         var userData={
             token: token,
             user: user
         };

        res.header('x-auth',token).send(userData);} ) } ).
        catch ((err)=>{
          console.log('hai rotto il cazzo');
          var userData={
            token: null,
            user: null
          };
          res.send(userData);
          });
});

userRouter.post('/checkemail',(req,res)=>{
    var body= _.pick(req.body , ['email' ]);
    console.log(body.email);
    User.findOne({'email': body.email} ).then((user)=>{
        console.log('user is '+user);
        if(user !== null){
          res.send('emailIsValid' );
            }
        else{
            res.send(null);
            }
    }).catch((e)=>{
        console.log(e);
        res.send(null);
    });
});
userRouter.post('/logout' ,authenticate,(req,res) =>{

  req.user.RemoveToken(req.token).then( ()=>{
    res.status(200).send();
  }).catch( () => {
  res.status(500).send();
  });
});
module.exports ={userRouter};
