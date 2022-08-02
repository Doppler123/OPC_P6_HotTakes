const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordValidation = require("../middleware/password-validation");
const emailValidation = require("../middleware/email-validation");

router.post('/signup', emailValidation, passwordValidation, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;