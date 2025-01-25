import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(
    process.env.MONGO_URI,
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = await User.findOne({ email: 'xz@gmail.com'})
if(user)
    console.log('User exists in the database');
else
    console.log('User does not exist in the database');