// dependencies
import {
  USER_ACCOUNTS_MODEL,
  validate,
} from "../models/user_accounts_schema.js";
import bcrypt from "bcrypt";

export const signuppagepost = async (req, res) => {
  console.log(req.body);
  try {
    //check if there is an error to the passed data
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    //check if email is already used or already in the database
    const checkemail = await USER_ACCOUNTS_MODEL.findOne({
      email: req.body.email,
    });

    if (checkemail) {
      return res.status(409).send({ message: `Email Already in Use!` });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);

    //create user
    const user = USER_ACCOUNTS_MODEL.create({
      firstname: req.body.fname,
      lastname: req.body.lname,
      email: req.body.email,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ status: 200, message: "Account Created Successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
    res.redirect("http://localhost:3000/signup");
  }
};

export const signuppageget = (req, res) => {
  res.send("sign up page");
};
