const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// saving a reference to the Schema constructor
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

// this creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

//Exporting the User model
module.exports = User;