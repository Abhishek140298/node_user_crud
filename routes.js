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
console.log("Check Request",req.body.name)
  try {
  
      const users = await userModel.find(req.body);
      console.log("Userrrr",users)
     users.length>0?res.send(users[0]):res.send({
      message: "User Not found"}
     )
    
   
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser=async(req,res)=>{
  try{
    console.log("Users update",req.query.name)
    //console.log("schema",userModel)

const userUpdte=new userModel({

  name:req.query.name,
  age:req.body.age
})

userModel.updateOne({name: req.query.name},{$set:{age:req.body.age}}).then(()=>{

  res.status(200).send({message:'Updated Succefully'})
}).catch(error=>res.status(400).send(error))

}

//users.length>0?res.send(users[0]):res.send({
 // message: "User Not found"}
 //)
  //}

  catch(error){
    res.status(500).send(error);
  }
}

module.exports = {
  addUser,
  getUser,
  updateUser
};


