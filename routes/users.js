import express from 'express';
var router = express.Router();
import User from '../models/user';
import Role from '../models/role';
// import Casual from 'casual';



router.get('/', function(req, res, next) {
  User.find({})
  .populate('Roles.Role')
  .exec(function (err, users) {
      console.log(users);
            if (err) return res.status(500).send("There was a problem finding the users.");
              res.render('./Users/index', { title: 'Users', userData : users });
        });
});

router.post('/Create', function(req, res, next) {
    
    console.log(req.body);
    Role.find({Role : "User"},(err,role)=>{
        let user =req.body;
        user.Role = role;
    User.create(user
        ,
        (err,createdUser)=>{
            console.log(createdUser);
            console.log(err);
            if (err) return next(err);
          res.redirect('/users');
        }
        );    
        
    });
    
});
module.exports = router;
