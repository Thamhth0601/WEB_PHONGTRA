const AppError=require('../utils/appError')

const sendErrorDev=(err,req,res)=>{
    console.log(req);
    //API 
    if(req.originalUrl.startsWith('/api')){
        res.status(err.statusCode).json({
            status:err.status,
            error:err,
            message: err.message,
            stack:err.stack,
        });
    }
    //RENDER WEBSITE
    else{
        res.status(err.statusCode).render('error',{
            title: 'Something went wrong!',
            msg:err.message
        });
    }
}

module.exports=(err,req,res,next)=>{ // định nghĩa 4 tham số err,req,res,next thì Express sẽ tự động hiểu là error handling middleware, 3 tham số (err,req,res) là object, err sẽ nhận lỗi thì next(new AppError)
    err.statusCode=err.statusCode || 500;
    err.status=err.status || 'error';
 
    console.log('errorController');
    sendErrorDev(err,req,res);
}