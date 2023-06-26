const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "hgjhghghh";
const signup = async (req, res) => {


  // Exiting user

  const { username, email, phone, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email, password });
    if (existingUser) {
      return res.status(400).json({ Message: "user already exit" });
    }

    // Hashed Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // User creation
    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
      phone: phone,
    });

    //  then token generation

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(200).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "getting error " });
  }
};

const signin = async (req, res) => {

  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email:email});
    if (!existingUser) {
      return res.status(400).json({ Message: "user not exit" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if(!matchPassword){
        return res.status(400).json({message:"Invalid Credentioal"})
    }
    
    if(matchPassword){
        const token = jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY);
        res.status(200).json({ user: existingUser, token: token });
        
    }
   

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "getting error " });
  }
};

module.exports = { signin, signup };
