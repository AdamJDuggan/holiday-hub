const User = require("../../models/user.mongo");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

async function signUp(req, res) {
  try {
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // create a new user
    const user = await User.create(req.body);

    // create a token
    var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(200).send({ auth: true, token: token });
  } catch (error) {
    res.status(400).json({ error });
  }
}

async function login(req, res) {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      accessToken: token,
    });
  });
}
module.exports = { signUp, login };
