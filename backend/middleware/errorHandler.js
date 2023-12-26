const notFound = (req,res,next)=>{
    console.log("hi");
    const err = new Error(`request not fond ${req.originaUrl}`);
    res.status(404);
    next(err);

}
const errorHandler = (err,req,res,next)=>{
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === "CastError" && err.kind ==="ObjectId"){
        message = `Resource not found`
        statusCode= 404

    }
    res.status(statusCode).json({
        message,
        stack:process.env.NODE_ENV ==="prodction"?"error":err.stack

    })
}
export {notFound,errorHandler}