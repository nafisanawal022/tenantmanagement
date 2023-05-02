const express = require ("express");
const router = express.Router();
const Admin = require("../models/adminModel");

router.post('/adminlogin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      res.send(admin);
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post('/adminregister', async(req,res)=> {
  try {
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    res.send("Admin registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
