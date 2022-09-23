const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=require('./app');


dotenv.config({path:'./config.env'}); // khai báo đường dẫn của config.env để sử dụng những biến được khai trong đó
const port=process.env.port || 8000;
const DB=process.env.DATABASE;

//tạo kết nối đến database(mongoDB)
mongoose.connect(DB,{ //mongoose.connect trả ra return
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(connect =>{
    console.log('DB connection successful!');
})


app.listen(port,()=>{
    console.log(`App running on http://localhost:${port}/home`);
});


