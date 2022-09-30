const mongoose=require('mongoose');

const showSchema=new mongoose.Schema({
    day:{
        type:String,
        required:[true,'Please enter dish name']
    },
    date:{
        type:Date,
        required:[true,'Please enter the time of the show']
    },
    content:{
        type:String,
        required:[true,'Please enter the content of the show']
    },
    singer:{
        type:String,
        required:[true,'Please enter the singer of the show']
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})




const Show=mongoose.model('Show',showSchema) // //tự động tạo User collection nếu chưa có, 'User' tên không được có chữ s sau cùng
module.exports=Show