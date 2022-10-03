import {signup,login,logout} from './authen'
import {createNewMenu,updateMenu, deleteMenu} from './cud-admin-menu'
import {createNewShow,updateShow,deleteShow} from './cud-admin-show'
import {createNewOrder} from './user-create-order'
import {agreeOrder,denyOrder,deleteOrder} from './ud-admin-order'


const signupForm = document.querySelector('.form-sign-up');
const loginForm = document.querySelector('.form-log-in');
const logoutBtn = document.querySelector('.log-out');
const logoutBtnAdmin = document.querySelector('.log-out-admin');

const imgCover = document.getElementById('imageDish');
const imgCoverShow = document.getElementById('imageShow');

const btnCreateMenu = document.querySelector('.btn-create-menu');
const btnSaveMenu = document.querySelector('.btn-save-menu');
const btnDeleteMenus = document.querySelectorAll('.btn-delete-menu');
const btnDeleteMenuConfirm = document.querySelector('.btn-delete-confirm');

const formUserOrder = document.querySelector('.form-user-order');

const btnConfirmAgreeOrders = document.querySelectorAll('.btn-confirm-agree-order');
const btnAgreeOrder = document.querySelector('.btn-agree-order');

const btnConfirmDenyOrders = document.querySelectorAll('.btn-confirm-deny-order');
const btnDenyOrder = document.querySelector('.btn-deny-order');

const btnConfirmDeleteOrders = document.querySelectorAll('.btn-confirm-delete-order');
const btnDeleteOrder = document.querySelector('.btn-delete-order');


const btnCreateShow = document.querySelector('.btn-create-show');
const btnSaveShow = document.querySelector('.btn-save-show');
const btnDeleteShows = document.querySelectorAll('.btn-delete-show');
const btnDeleteShowConfirm = document.querySelector('.btn-confirm-delete-show');



//Signup
if(signupForm){
    signupForm.addEventListener('submit',(e)=>{ // nút btn mới có submit
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;
        console.log(name,email,password,passwordConfirm);
        signup({name,email,password,passwordConfirm});
    });
}

//Login
if(loginForm){
    loginForm.addEventListener('submit',(e)=>{ // nút btn mới có submit
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login({email,password});
    });
}

//Logout
if(logoutBtn){
    logoutBtn.addEventListener('click',logout);
}

//Logout Admin
if(logoutBtnAdmin){
    logoutBtnAdmin.addEventListener('click',logout);
}

//Display image menu before save in database
if(imgCover){
    imgCover.addEventListener('change',async (e)=>{
        e.preventDefault();
        const ImagesFileURL = ()=>{
            var fileSelected = document.getElementById('imageDish').files;
            if(fileSelected.length > 0){
                var fileToLoad = fileSelected[0];
                var fileReader = new FileReader();
                fileReader.onload = (e) => {
                    var srcData = e.target.result;
                    var newImage = document.createElement('img');
                    newImage.src = srcData;
                    document.getElementById('displayImg').innerHTML = newImage.outerHTML;
                }
                fileReader.readAsDataURL(fileToLoad)

            }
        };
        ImagesFileURL();
    })
}

//Display image show before save in database
if(imgCoverShow){
    imgCoverShow.addEventListener('change',async (e)=>{
        e.preventDefault();
        const ImagesFileURL = ()=>{
            var fileSelected = document.getElementById('imageShow').files;
            if(fileSelected.length > 0){
                var fileToLoad = fileSelected[0];
                var fileReader = new FileReader();
                fileReader.onload = (e) => {
                    var srcData = e.target.result;
                    var newImage = document.createElement('img');
                    newImage.src = srcData;
                    document.getElementById('displayImgShow').innerHTML = newImage.outerHTML;
                }
                fileReader.readAsDataURL(fileToLoad)

            }
        };
        ImagesFileURL();
    })
}



//Admin Create menu
if(btnCreateMenu){
    btnCreateMenu.addEventListener('click',(e)=>{ // nút btn mới có submit
        e.preventDefault();

        const form = new FormData();
        form.append('name',document.getElementById('name').value);
        form.append('price',document.getElementById('price').value);
        form.append('description',document.getElementById('description').value);
        form.append('imageDish',document.getElementById('imageDish').files[0]);

        createNewMenu(form);
    });
}

//Admin update menu
if(btnSaveMenu){
    btnSaveMenu.addEventListener('click',(e)=>{ // nút btn mới có submit
        e.preventDefault();

        const form = new FormData();
        form.append('name',document.getElementById('name').value);
        form.append('price',document.getElementById('price').value);
        form.append('description',document.getElementById('description').value);
        form.append('imageDish',document.getElementById('imageDish').files[0]);
        const id = document.getElementById('id').value;
        updateMenu(form, id);
    });
}

//Admin delete menu 
if(btnDeleteMenus){
    let id_del;
    btnDeleteMenus.forEach(btnDel =>{
        btnDel.addEventListener('click',()=>{
            id_del = btnDel.getAttribute('id');
        });
    });
    if(btnDeleteMenuConfirm){
        btnDeleteMenuConfirm.addEventListener('click',()=>{
            deleteMenu(id_del);
        })
    }
}

//User create new order -- User Booking
if(formUserOrder){
    formUserOrder.addEventListener('submit',(e)=>{
        e.preventDefault();

        const id_user = document.getElementById('id_user').value;

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const amount = document.getElementById('amount').value;
        const dateOrder = document.getElementById('dateOrder').value;
        const show = document.getElementById('show').value;
        const timeOrder = document.getElementById('timeOrder').value;
        const note = document.getElementById('note').value;

        createNewOrder({name,phone,amount,dateOrder,show,timeOrder,note},id_user);
    })
}

//Admin confirm user order
if(btnConfirmAgreeOrders){
    let idOrder;
    btnConfirmAgreeOrders.forEach(btnConfirmAgree =>{
        btnConfirmAgree.addEventListener('click',()=>{
            idOrder = btnConfirmAgree.getAttribute('id');
        });
    });
    if(btnAgreeOrder){
        btnAgreeOrder.addEventListener('click',()=>{
            agreeOrder(idOrder);
        })
    }
}

//Admin deny user order
if((btnConfirmDenyOrders)){
    let idOrder;
    btnConfirmDenyOrders.forEach(btnConfirmDeny =>{
        btnConfirmDeny.addEventListener('click',()=>{
            idOrder = btnConfirmDeny.getAttribute('id');
        });
        
    });
    if(btnDenyOrder){
        btnDenyOrder.addEventListener('click',()=>{
            denyOrder(idOrder);
        })
    }
}

//Admin delete user order
if(btnConfirmDeleteOrders){
    let idOrder;
    btnConfirmDeleteOrders.forEach(btnConfirmDelete =>{
        btnConfirmDelete.addEventListener('click',()=>{
            idOrder = btnConfirmDelete.getAttribute('id');
        });
        
    });
    if(btnDeleteOrder){
        btnDeleteOrder.addEventListener('click',()=>{
            deleteOrder(idOrder);
        })
    }
}

//Admin create show
if(btnCreateShow){
    btnCreateShow.addEventListener('click',(e)=>{
        e.preventDefault();

        const formShow = new FormData();
        formShow.append('date',document.getElementById('date').value);
        formShow.append('day',document.getElementById('day').value);
        formShow.append('content',document.getElementById('content-show').value);
        formShow.append('singer',document.getElementById('singer').value);
        formShow.append('imageShow',document.getElementById('imageShow').files[0]);

        createNewShow(formShow);
    })
}

//Update menu
if(btnSaveShow){
    btnSaveShow.addEventListener('click',(e)=>{ // nút btn mới có submit
        e.preventDefault();

        const formShow = new FormData();
        formShow.append('date',document.getElementById('date').value);
        formShow.append('day',document.getElementById('day').value);
        formShow.append('content',document.getElementById('content-show').value);
        formShow.append('singer',document.getElementById('singer').value);
        formShow.append('imageShow',document.getElementById('imageShow').files[0]);

        const id = document.getElementById('id').value;

        updateShow(formShow, id);
    });
}

//Admin delete show 
if((btnDeleteShows)){
    let id_del_show;
    btnDeleteShows.forEach(btnDel =>{
        btnDel.addEventListener('click',()=>{
            id_del_show = btnDel.getAttribute('id');
        });
    });
    if(btnDeleteShowConfirm){
        btnDeleteShowConfirm.addEventListener('click',()=>{
            deleteShow(id_del_show);
        })
    }
}
