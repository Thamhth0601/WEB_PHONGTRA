import {signup,login,logout} from './authen'
import {createNewMenu,updateMenu, deleteMenu} from './cud-menu'


const signupForm = document.querySelector('.form-sign-up');
const loginForm = document.querySelector('.form-log-in');
const logoutBtn = document.querySelector('.log-out');
const logoutBtnAdmin = document.querySelector('.log-out-admin');
const imgCover = document.getElementById('imageDish');
const btnCreateMenu = document.querySelector('.btn-create-menu');
const btnSaveMenu = document.querySelector('.btn-save-menu');
const btnDeleteMenu = document.querySelectorAll('.btn-delete-menu');
const btnDeleteMenuConfirm = document.querySelector('.btn-delete-confirm');


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

if(loginForm){
    loginForm.addEventListener('submit',(e)=>{ // nút btn mới có submit
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login({email,password});
    });
}

if(logoutBtn){
    logoutBtn.addEventListener('click',logout);
}

if(logoutBtnAdmin){
    logoutBtnAdmin.addEventListener('click',logout);
}

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




var id_del
if(btnDeleteMenu){
    btnDeleteMenu.forEach(btnDel =>{
        btnDel.addEventListener('click',(e)=>{
            id_del = btnDel.getAttribute('id');
        //    deleteMenu(id_del);
        })
    })
}

if(btnDeleteMenuConfirm){
    btnDeleteMenuConfirm.addEventListener('click',()=>{
        deleteMenu(id_del);
    })
}


