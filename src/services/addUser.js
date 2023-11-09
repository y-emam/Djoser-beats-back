const User = require("../models/user");

const addUser = async (email, firstName, lastName, countryCode) => {
  const res = await User.find({ email: email });

  // check if user exists or not, so we know if we create new user or not
  if (res.length <= 0) {
    const newUser = new User({
      firstName,
      lastName,
      email,
      countryCode,
    });

    return await newUser.save();
  }
};

module.exports = addUser;
