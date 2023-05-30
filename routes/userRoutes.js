const express = require("express");
const { getAllusers, registerController, loginController } = require("../controllers/userController");
//router object to perform routing
const router = express.Router();

// get all users || GET
router.get("/all-users", getAllusers);

// create user || post
router.post(`/register`, registerController)

// LOGIN || POST
router.post('/login', loginController)

module.exports = router;