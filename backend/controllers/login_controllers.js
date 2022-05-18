//dependencies
import { USER_ACCOUNTS_MODEL } from "../models/user_accounts_schema.js";
import joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//function for loginpost route
export const loginpagepost = async (req, res) => {
  try {
    //validate passed data
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    //retreive user from database
    const user = await USER_ACCOUNTS_MODEL.findOne({
      email: req.body.email,
    });
    //check if user exists
    if (!user)
      return res.status(401).send({ message: `Invalid Email Or Password` });
    //compare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword)
      return res.status(401).send({ message: `Invalid Email Or Password` });
    //create token
    const token = jwt.sign(
      {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );
    console.log(`token: ${token}`);
    res
      .status(200)
      .send({ status: 200, user: token, message: `Logged In Successfully` });
  } catch (error) {
    res.status(500).send("Internal Server Error");
    res.redirect("http://localhost:3000/signup");
  }
};

//validate handler

const validate = (data) => {
  const Schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: joi.string().required().label("Password"),
  });
  return Schema.validate(data);
};

export const loginpageget = (req, res) => {
  res.send("login page");
};
