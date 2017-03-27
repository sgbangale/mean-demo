import express from 'express';
const router = express.Router();

import Roles from '../models/role'

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('./Login/index', { title: 'Express'});      
  
  
});

module.exports = router;
