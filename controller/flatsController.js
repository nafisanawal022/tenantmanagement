const express = require("express");
const router = express.Router();
const Flat = require("../models/flatModel");

router.get('/getallflats', async (req, res) => {
  try {
    const flats = await Flat.find();
    res.send(flats);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post('/addflat', async(req,res)=> {
    try {
      const newflat = new Flat(req.body)
      await newflat.save()
      res.send("To-Let added successfully")
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  });
  
router.patch('/update/:flatNo', async (req, res) => {
    try {
      const flat = await Flat.findOneAndUpdate(
        { flatNo: req.params.flatNo },
        { $set: { rent: req.body.rent, description: req.body.description } },
        { new: true } // Return the updated document
      );
      res.send(flat);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  });

  router.delete('/update', async (req, res) => {
    try {
      await Flat.findOneAndDelete({ flatNo: req.params.flatNo });
      res.send("Deleted successfully");
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  });
  


  

module.exports = router;
