const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.post('/', user.createUser);
router.get('/login', user.loginUser);

module.exports = router;