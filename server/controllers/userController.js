import User from "../models/User.js";
import bcrypt from "bcryptjs" ;

//Signup a new user
export const signup = async(req , res) => {
     const { fullName , email , password , bio } = req.body;

     try{
          if(!fullName || !email || !password || !bio){   //if any detail is missing
               return res.json({success: false , message: "Message Details"});
          }

          const user = await User.findOne({email});        //checking if the email exists

          if(user){    //if email id already registered
               return res.json({success: false ,message: "Account already exists"});
          }

          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password , salt);  //we will store the hashed password in database not the original password

          const newUser = await User.create({
               fullName, email, password: hashedPassword, bio
          });

     }
     catch(error){
             
     }
}