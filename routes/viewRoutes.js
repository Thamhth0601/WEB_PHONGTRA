const express=require('express');
const viewsController = require('../controllers/viewController');
const authController=require('../controllers/authController'); //import file authController.js từ thư mục controller



const router=express.Router();

//user
router.get('/',authController.isLoggedIn,viewsController.getOverview);
router.get('/login',viewsController.getLoginForm);
router.get('/signup',viewsController.getSignupForm);

//admin
router.get('/crud-menu-form',authController.protect,authController.restrictTo('admin'),viewsController.getCRUDMenuForm);
router.get('/create-menu-form',authController.protect,authController.restrictTo('admin'),viewsController.getCreateMenuForm);
router.get('/update-menu-form/:id',authController.protect,authController.restrictTo('admin'),viewsController.getUpdateMenuForm);


 
module.exports=router;