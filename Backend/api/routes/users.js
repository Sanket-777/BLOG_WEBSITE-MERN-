const router = require("express").Router(); // how application responds to cliend urls
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

//UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.body.userId == req.params.id) {
    //check if there is auser like this
    if (req.body.password) {
      //check if the password is also send or not
      const salt = await bcrypt.genSalt(10); //genarate the salt for hashing
      req.body.password = await bcrypt.hash(req.body.password, salt); // hash the password
    }
    try {
      //update the values in the database
      const updateduser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body, //written body because it will replace everything inside the body
      });

      res.status(200).json(updateduser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your account");
  }
}); // async makes errors easier to  handle

//delete account
router.delete("/:id", async (req, res) => {
  if (req.body.userId == req.params.id) {
    //check if there is auser like this

    try {
      const user = await User.findById(req.params.id);

      try {
        //update the values in the database
            await Post.deleteMany({username : user.username});    
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json("USer has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (error) {
        res.status(404).json("User not  found..");
    }
  } else {
    res.status(401).json("You can only delete your account");
  }
}); // asy


//get suer
router.get("/:id",async (req,res)=>{
    try {
        const user  = await User.findById(req.params.id);
        const {password,...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
