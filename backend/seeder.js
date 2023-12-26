import mongoose from "mongoose";
import dotenv from 'dotenv'
import connectDB from "./db.js";
import colurs from 'colors'
import Product from "./models/prodctModel.js";
import Order from "./models/orderModel.js";
import User from "./models/userModel.js";
import user from "./data/user.js";
import products from "./data/products.js";
dotenv.config()

connectDB()

const importdata =async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdusers = await User.insertMany(user)
        
        const adminId = createdusers[0]._id
        

        const sampleProdudt = products.map((prodct)=>{
            return {...prodct,user:adminId}
        })
         await Product.insertMany(sampleProdudt)

         console.log("Data imported".green.inverse);
         process.exit()


    }catch(err){
        console.log(err);
        process.exit()

    }
}

const deleteData = async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        console.log("Deleted Success".red.inverse)
        process.exit()


    }catch(err){
        console.log(err);
        process.exit()
    }
    

}

if(process.argv[2] == "-i"){
    importdata()
}else{
    deleteData()
}