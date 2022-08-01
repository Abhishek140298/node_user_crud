//Every server have the IP address

// Create the server

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser')
const cors=require('cors')

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/add_user", routes.addUser);
app.post('/get_user',routes.getUser)
app.put('/update_user',routes.updateUser)
mongoose.connect(
  "mongodb+srv://shop_data:pass@cluster0.slq5v.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
  }
);



const db = mongoose.connection;
db.on("Error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(8080);
