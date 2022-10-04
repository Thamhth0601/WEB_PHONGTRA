const Menu = require("../models/menuModel");
const Show = require("../models/showModel");
const Order = require("../models/orderModel");
const User = require("../models/userModel");

exports.getOverview = async (req,res)=>{
  const menus = await Menu.find();
  const shows = await Show.find();
  const user = res.locals.user;
  if(user){
    res.status(200).render('./pages/overview',{
      user:user,
      menus:menus,
      shows:shows
    })
  }
  else{
    res.status(200).render('./pages/overview',{
      user:false,
      menus:menus,
      shows:shows
    })
  }
};

exports.getLoginForm = (req,res)=>{
    res.status(200).render('./pages/login',{
      title:'Login into your account'
    })
};


exports.getSignupForm = (req,res)=>{
  res.status(200).render('./pages/signup',{
    title:'Sign up your account'
  })
};

exports.getListOrderUser = async (req,res)=>{
  const user = res.locals.user;
  const orderUser = await User.findById(user.id).populate('orders');
  const arrayOrder = orderUser.orders
  res.status(200).render('./pages/list-order-user',{
    user:user,
    arrayOrder:arrayOrder
  });
};



//ADMIN
exports.getCRUDMenuForm =async (req,res)=>{
    const menus = await Menu.find();
    res.status(200).render('./pages/crud-menu-form',{
      menus:menus
    });
};

exports.getCreateMenuForm =async (req,res)=>{
  res.status(200).render('./pages/create-menu-form');
};

exports.getUpdateMenuForm =async (req,res)=>{
    const menu = await Menu.findById(req.params.id);
    res.status(200).render('./pages/update-menu-form',{
      menu:menu
    });
};

exports.getRUDOrderForm =async (req,res)=>{
  //filter req query
  let obj = req.query;
  for (const key in obj) {
    if(obj[key]===''){
        delete obj[key]
    }
  }
  if(obj.dateOrder){
    const dateTranfder = obj.dateOrder;
    console.log(dateTranfder)
    obj.dateOrder = new Date(dateTranfder)
  };

  const orders = await Order.find(obj);
  res.status(200).render('./pages/rud-user-order-form',{
    orders:orders
  });
};

exports.getCRUDShowForm =async (req,res)=>{
  const shows = await Show.find();
  res.status(200).render('./pages/crud-show-form',{
    shows:shows
  });
};

exports.getCreateShowForm =async (req,res)=>{
  res.status(200).render('./pages/create-show-form');
};

exports.getUpdateShowForm =async (req,res)=>{
  const show = await Show.findById(req.params.id);
  const date = show.date.toLocaleString('zh-HK',{day:'numeric',month: 'numeric',year: 'numeric'});
  const arrayDate = date.split('/');
  const dateTranfer = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`;
  console.log(dateTranfer);
  res.status(200).render('./pages/update-show-form',{
    show:show,
    dateTranfer:dateTranfer
  });
};