const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
console.log(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUsers = async (req, res) => {
  console.log(req.body);
  const users = await User.find();

  res.json(users);
};
