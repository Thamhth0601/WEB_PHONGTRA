import axios from 'axios'
import {showAlert} from './alert'


export const agreeOrder = async (idOrder) =>{
    try {
        const res = await axios({
            method:'POST',
            url: `http://127.0.0.1:8080/api/v1/orders/confirm-order/${idOrder}`
        });
        console.log(res)
        if(res.status == '204'){
            showAlert('success', 'Confirm order successfully');
            window.setTimeout(()=>{
                location.reload(true)
            },500)
        }
    }
    catch(err){
        showAlert('error',err.response.data.message)
    }
}


export const denyOrder = async (idOrder) =>{
    try {
        const res = await axios({
            method:'POST',
            url: `http://127.0.0.1:8080/api/v1/orders/deny-order/${idOrder}`
        });
        console.log(res)
        if(res.status == '204'){
            showAlert('success', 'Deny order successfully');
            window.setTimeout(()=>{
                location.reload(true)
            },500)
        }
    }
    catch(err){
        showAlert('error',err.response.data.message)
    }
}

export const deleteOrder = async (idOrder) =>{
    try {
        const res = await axios({
            method:'DELETE',
            url: `http://127.0.0.1:8080/api/v1/orders/${idOrder}`
        });
        console.log(res)
        if(res.status == '204'){
            showAlert('success', 'Delete order successfully');
            window.setTimeout(()=>{
                location.reload(true)
            },500)
        }
    }
    catch(err){
        showAlert('error',err.response.data.message)
    }
}