const router=require("express").Router();
const Complain=require("../models/Complain")


// Create complain form
router.post("/multiForm",async(req,res)=>{
    const newComplain=new Complain(req.body)
    try{
        const savedComplain= await newComplain.save()
        res.status(200).json(savedComplain)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
   
})

// get all Complain form of user
router.get("/",async (req,res) =>{
    const username=req.query.user
    try{
        let complains;
        complains=await Complain.find(username)
        res.status(200).json(complains)
    }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports = router