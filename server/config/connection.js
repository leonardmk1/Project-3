const mongoose = require("mongoose");

const uri =
  "mongodb+srv://leonardmk:password1234@cluster0.hg6re.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connected");
});

module.exports = mongoose.connection;
