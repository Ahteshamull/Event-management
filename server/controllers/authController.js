
const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const registrationController = async (req, res) => {
  let { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(404).send({ error: "Field Is Required" });
  }

  
  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return res.status(404).send({ error: "Email Already In Use" });
  }

  try {
    bcrypt.hash(password, 10, async function (err, hash) {
     
      if (err) {
        console.log(err);
      } else {
        const user = new userModel({
          name,
          email,
          password: hash,
          role,
        });
        await user.save();
         return res.status(201).send({ message: "user create successfully", user });
      }
    }
    );
  } catch (error) {
    return res.status(404).send({ error });
  }
};
const loginController = async (req, res) => {
  let { email, password } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    bcrypt.compare(password, existingUser.password, function (err, result) {
      if (result) {
   const token = jwt.sign({ email:existingUser.email }, process.env.PRV_TOKEN, {
     expiresIn: "24h",
   });
          return res.status(200).send({
            success: "User Login Successfully",
            data: existingUser,
            token,
          });
}

     })
     
  
  } else {
    return res.status(404).send({ error: "You Have Don't Any Account" });
  }
};
const allUser = async (req, res) => {
  let allUser = await userModel.find({});
  return res
    .status(200)
    .send({ success: true, message: "All User Patch", data: allUser });
};
module.exports = { registrationController, loginController, allUser };
