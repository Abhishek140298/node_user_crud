const userModel = require("./model");

const addUser = async (req, res) => {
  console.log(req.body, "fkdfkfhhgkh");
  try {
    const user = new userModel(req.body);

    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  //console.log("userModel and req",req)
 
console.log("Request",req.body)
    const users = await userModel.find(req.body);
  

  try {
    res.send(users[0]);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addUser,
  getUser,
};
