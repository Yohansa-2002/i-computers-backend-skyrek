import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import products from "../contollers/productController.js"

export async function createUser(req, res){

    try{

    const passwordHash = bcrypt.hashSync(req.body.password, 10) 
    
    console.log(passwordHash)

    const newUser = new User({
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : passwordHash

    }    
    )

    await newUser.save()

    res.json({
        message : "User Created Successfully"
    })
    
    }catch(error){
        console.log(error);
        res.json(
            {
            message : "Error creating user"
            }

        )
    }
}

export async function loginUser(req,res){
    try{
        const user = await User.findOne({
            email : req.body.email
        })

        console.log(user)

        if (user==null) {
            res.json({
                message : "User not found"
            }
            )
        } else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)
            if (isPasswordCorrect){
                
              const payload = {
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              isAdmin: user.isAdmin,
              isBlocked: user.isBlocked,
              isEmailVerified: user.isEmailVerified,
              image: user.image

            } 

            const token = jwt.sign(payload,"i-computers10Batch")
            console.log(token)

            res.json({
                token : token
            })

        }else {
                res.json({
                    message : "Invalid Password"
                }
                )
            }
        }
        
    }catch(error){
        console.log(error)
    }




}

export default function isAdmin(req){  //when you are login, check the admin or not
    if(req.user == null){
        return falses
}

    if(req.user.isAdmin){
        return true
    }else{
        return false
    }
}
