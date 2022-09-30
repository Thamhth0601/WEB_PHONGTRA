const Show=require('../models/showModel'); // import model tour từ folder model
const catchAsync=require('../utils/catchAsync');



//create show
exports.createShow=catchAsync(async(req,res,next)=>{ // hàm catchAsync return ra hàm vô danh sau đó gán vào createTour, khi tạo mới tour thì hàm vô danh đó sẽ được gọi, cần tham số next để gọi đến global error handling middleware
    console.log(req.body);
    const show=await Show.create(req.body);
    res.status(200).json({
        status:'success',
        data: {
            show:show
        }
    });
});
