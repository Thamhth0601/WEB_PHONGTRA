import axios from 'axios'
import {showAlert} from './alert'


export const createNewOrder = async (data,id_user) =>{
    try {
        const res = await axios({
            method:'POST',
            url: `http://127.0.0.1:8080/api/v1/users/${id_user}/orders`,
            data: data//data send with request(gửi lên url)
        });
        if(res.data.status === 'success'){
            showAlert('success', 'Order table successfully');
            window.setTimeout(()=>{
                location.assign('/')
            },1500)
        }
    }
    catch(err){
        showAlert('error',err.response.data.message)
    }
}
