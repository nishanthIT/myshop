
import mongoose from 'mongoose'
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.DB_CON )
        console.log("connected db");
     
    }catch(err){
        console.log(err);
        process.exit(1)

    }
  
}

export default connectDB