const router = require("express").Router(); // how application responds to cliend urls
const Category = require("../models/Category");


router.post("/",async (req,res)=>{
    const newcat  = new Category(req.body);
    try{
        const savedcat = await newcat.save();
        res.status(200).json(savedcat);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

router.get("/",async (req,res)=>{
    try{
        const savedcat = await Category.find();
        res.status(200).json(savedcat);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})
module.exports = router;
