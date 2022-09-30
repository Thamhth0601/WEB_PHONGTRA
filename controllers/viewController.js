const Menu = require("../models/menuModel");

exports.getOverview = (req,res)=>{
  const user = res.locals.user;
  if(user){
    res.status(200).render('./pages/overview',{
      user:user
    })
  }
  else{
    res.status(200).render('./pages/overview',{
      user:false
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


//ADMIN
exports.getCRUDMenuForm =async (req,res)=>{
    const menus = await Menu.find();
    console.log(menus);
    res.status(200).render('./pages/crud-menu-form',{
      menus
    });
};

exports.getCreateMenuForm =async (req,res)=>{
  const menus = await Menu.find();
  console.log(menus);
  res.status(200).render('./pages/create-menu-form',{
    menus
  });
};

exports.getUpdateMenuForm =async (req,res)=>{
    const menu = await Menu.findById(req.params.id);
    res.status(200).render('./pages/update-menu-form',{
      menu
    });
};

