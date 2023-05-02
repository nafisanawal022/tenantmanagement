import axios from "axios";
import { message } from 'antd';

export const adminLogin=(reqObj)=> async dispatch=>{
    dispatch({type: 'LOADING', payload:true})

    try {
        const response = await axios.post('/api/admins/adminlogin', reqObj)
        localStorage.setItem('admin', JSON.stringify(response.data))
        message.success('Admin login successful') 
        setTimeout(()=> { 
            window.location.href='/adminhome'
        },500);
        dispatch({type: 'LOADING', payload:false})
    } catch (error) {
        console.log(error)
        message.error("Something went wrong")
        dispatch({type: 'LOADING' , payload:false})
    }
}
  

export const adminRegister=(reqObj)=> async dispatch=>{
    dispatch({type: 'LOADING', payload:true})

    try {
        const response = await axios.post('/api/admins/adminregister', reqObj)
        localStorage.setItem('admin', JSON.stringify(response.data))
        message.success('Registration successful')   
        dispatch({type: 'LOADING', payload:false})
        setTimeout(()=> { 
            window.location.href='/adminlogin'
        },500); 
    } catch (error) {
        console.log(error)
        message.error("Something went wrong")
        dispatch({type: 'LOADING' , payload:false})
    }
}