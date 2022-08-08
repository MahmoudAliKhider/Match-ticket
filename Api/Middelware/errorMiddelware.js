const errorMiddelware =(err,req,res,next)=>{
 
    const Codestatus = res.statusCode? res.statusCode:500
    res.status(Codestatus)
    res.json({
        message:err.massege,
        static:process.env.NODE_ENV === "production" ?null : err.stack
    })
}

module.exports=errorMiddelware