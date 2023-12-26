import express from "express"
import products from "./data/products.js"
import dotenv from"dotenv"
dotenv.config()
import connectDB from "./db.js"
import productrouter from "./routes/productrout.js"
import { errorHandler, notFound } from "./middleware/errorHandler.js"

const port = process.env.PORT

const app = express()

connectDB()

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept,Authorization")
    res.setHeader("Access-Control-Allow-Methods","GET, POST,PATCH,DELETE");
    next();
  })



app.use("/api/products",productrouter)


app.use(notFound)
app.use(errorHandler)




app.listen(port,()=>{ console.log('started listning on port 5000');})

