import axios from "axios";
import {message} from 'antd'

export const userLogin=(reqObj)=> async dispatch=>{
    dispatch({type: 'LOADING', payload:true})

    try {
        const response = await axios.post('/api/users/login', reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success('Login successful')
        setTimeout(()=> { 
            window.location.href='/mainMenu'
        },500); 
        dispatch({type: 'LOADING', payload:false})
    } catch (error) {
        console.log(error)
        message.error("Something went wrong")
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=> async dispatch=>{
    dispatch({type: 'LOADING', payload:true})

    try {
        const response = await axios.post('/api/users/register', reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success('Registration successful')   
        dispatch({type: 'LOADING', payload:false})
        setTimeout(()=> { 
            window.location.href='/'
        },500); 
    } catch (error) {
        console.log(error)
        message.error("Something went wrong")
        dispatch({type: 'LOADING' , payload:false})
    }
}


export const getAllUsers = () => async dispatch => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.get('/api/users/getallusers');
    dispatch({ type: 'GET_ALL_USERS', payload: response.data });
    dispatch({ type: 'LOADING', payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
  }
};
