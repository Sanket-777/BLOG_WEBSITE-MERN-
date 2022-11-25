const router = require ("express").Router();  // how application responds to cliend urls
const User = require("../models/User");
const bcrypt = require("bcrypt");



//REGISTER 
 router.post("/register", async (req,res) =>{
    try{
        const salt = await bcrypt.genSalt();
        const hashedpass = await bcrypt.hash(req.body.password,salt);
        const newUser  = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedpass,
        })

        const user = await newUser.save();//saving the user
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
 })  // async makes errors easier to  handle


 //login
 router.post("/login",async(req,res)=>{
    try
    {
        const  user = await User.findOne({username : req.body.username});
        !user && res.status(400).json("Wrong credentials !");

        const validate = await bcrypt.compare(req.body.password,user.password); //checking if the password matches in the database
        !validate && res.status(400).json("Wrong credentials !");

        const { password,...others}  =user._doc;  //dont because we  do not want to show password to the user
        res.status(200).json(others); 
    }
    catch(err)
    {
        res.status(500).json(err);
    }
 });

 module.exports = router; 