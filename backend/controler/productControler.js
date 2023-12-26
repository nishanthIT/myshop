import asyncHandler from "../middleware/asyncHandler.js";
import productModel from "../models/prodctModel.js"

export const getAll = asyncHandler(async(req,res)=>{
    const products = await productModel.find({})
  
    res.json({products})
})

export const getOne = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const prodct = await productModel.findById(id)
    if(prodct){
        res.json(prodct)

    }else{
        res.status(404)
        throw new Error("no Prodct with this id")
    }
   

})