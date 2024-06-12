const express = require("express");
const router = express.Router();
const usersInfo = require("../models/user");
const { body, validationResult } = require("express-validator");

router.post("/fetchUser", [body("name", "Name field can't be Empty").isLength({ min: 1 }), body("email", "Enter a valid Email").isEmail()], async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }
    let user = await usersInfo.findOne({ email: req.body.email });
    if (user) {
        success = false;
        return res.status(400).json({ success, errors:[{msg:"this email id already exists"}] });
    }

    let a = req.body.a;
    let b = req.body.b;
    let ans1 = req.body.ans;
    let ans = parseInt(ans1);
    

    if(a+b!==ans){
        success = false;
        return res.status(400).json({ success, errors:[{msg:"Captcha is invalid"}],  });
    }

    try{

        user = await usersInfo.create({
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,
            date: req.body.date,
        })

        let result = req.body;
        success = true;
        res.json({ success, result });
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal error occored");
    }
})

module.exports = router;