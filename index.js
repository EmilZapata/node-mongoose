const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://EmilH:123123**@cluster0.fkspn.mongodb.net/db_test?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true });

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Galfield" });
kitty.save().then(() => console.log("se guardo el gato"));

Cat.find().then(console.log);
