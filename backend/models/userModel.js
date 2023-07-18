const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) throw new Error("Email and password are required");

  if (!validator.isEmail(email)) throw new Error("Email is not valid");

  if (!validator.isStrongPassword(password))
    throw new Error("Password is not strong enough");

  const exists = await this.findOne({ email });

  if (exists) throw new Error("User with this email already exists");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw new Error("Email and password are required");

  const user = await this.findOne({ email });

  if (!user) throw new Error("User with this email does not exist");

  const auth = await bcrypt.compare(password, user.password);

  if (!auth) throw new Error("Incorrect password");

  return user;
};

module.exports = mongoose.model("User", userSchema);
