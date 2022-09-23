const express=require('express'); // express là function
const path = require('path') // path là thư viện có sẵn của nodejs
const app=express();




app.set('views',path.join(__dirname,'views')); // khai báo template nằm ở thư mục nào
app.use(express.json()); //app.use là để sử dụng midleware, express.json() có tác dụng đưa dữ liệu được request(trong phần body của request chứa yêu cầu được client nhập vào ô) từ client vào object request bởi vì express không hỗ trợ điều này
app.use(express.static(`${__dirname}/public`)) // middleware hiển thị img.css, khi là file tĩnh thì nó sẽ trỏ vào thư mục public



app.get('/login',(req,res)=>{
  res.render('login.ejs')
})

app.get('/home',(req,res)=>{
  res.render('home.ejs')
})




module.exports=app;