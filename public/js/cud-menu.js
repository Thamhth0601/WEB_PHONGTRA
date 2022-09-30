import axios from 'axios'
import {showAlert} from './alert'

export const createNewMenu = async (data) =>{
    try {
        const res = await axios({
            method:'POST',
            url: 'http://127.0.0.1:8080/api/v1/menus',
            data: data//data send with request(gửi lên url)
        });
        if(res.data.status === 'success'){
            showAlert('success', 'Create menu successfully');
            window.setTimeout(()=>{
                location.assign('/crud-menu-form')
            },1500)
        }
    }
    catch(err){
        showAlert('error',err.response.data.message)
    }
}



export const updateMenu = async (data,id) =>{
    try {
        const res = await axios({
            method:'PATCH',
            url: `http://127.0.0.1:8080/api/v1/menus/${id}`,
            data: data//data send with request(gửi lên url)
        });
        if(res.data.status === 'success'){
            showAlert('success', 'Update menu successfully');
            window.setTimeout(()=>{
                location.assign('/crud-menu-form')
            },1500)

        }
    }
    catch(err){
        showAlert('error',err.response.data.message)
    }
}


export const deleteMenu = async (id) =>{
    console.log(id);
    try {
        const res = await axios({
            method:'DELETE',
            url: `http://127.0.0.1:8080/api/v1/menus/${id}`
        });

        if(res.status == '204'){
            showAlert('success', 'Delete menu successfully');
            window.setTimeout(()=>{
                location.assign('/crud-menu-form')
            })
        }
    }
    catch(err){
        showAlert('error',err.response.data.message)
    }
}