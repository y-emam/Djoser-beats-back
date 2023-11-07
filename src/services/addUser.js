const User = require("../models/user");

const addUser = async (email, firstName, lastName, countryCode) => {
  // todo: check if there is a user with the same email
  // todo: if so increase the payment counter
  // todo: if not create a new user
  const newUser = new User({
    buyerEmail: email,
    totalPrice: totalPrice,
    items: [...cartItems],
  });

  return await newUser.save();
};

module.exports = addUser;
