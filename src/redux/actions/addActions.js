import axios from "axios";
import {message} from 'antd'

export const add=(reqObj)=> async dispatch=>{
    dispatch({type: 'LOADING', payload:true})

    try {
        const response = await axios.post('/api/users/add', reqObj)
        localStorage.setItem('add', JSON.stringify(response.data))
        message.success('Registration successful')   
        dispatch({type: 'LOADING', payload:false})
        setTimeout(()=> { 
            window.location.href='/adminhome'
        },500); 
    } catch (error) {
        console.log(error)
        message.error("Something went wrong")
        dispatch({type: 'LOADING' , payload:false})
    }
}