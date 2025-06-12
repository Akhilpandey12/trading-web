const User = require('../models/user')
const { hashPassword } = require('../utils/hash');
const jwt = require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const bcrypt = require('bcryptjs');

//registerUser
const registerUser = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email })
  if (existingUser) throw new Error('email already in use')

  const hashed = await hashPassword(password)
  const newUser = new User({ username, email, password: hashed })
  await newUser.save()

  return { newUser, message: "user successesfully registerred" }
}


//loginUser
const loginUser = async ({ username, password }) => {
  const user = await User.findOne({ username });

  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Username or password is incorrect");

  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
      username: user.username
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );


  return { token, username: user.username, userId: user._id };
};

module.exports = { registerUser, loginUser };
