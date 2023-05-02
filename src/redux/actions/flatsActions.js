import axios from 'axios';
import {message} from 'antd'

export const getAllFlats=()=> async dispatch=>{
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get('/api/flats/getallflats')
        dispatch({type: 'GET_ALL_FLATS', payload:response.data})
        dispatch({type: 'LOADING', payload:false})
    } catch (error){
        console.log(error)
        dispatch({type: 'LOADING', payload:false})
    }
}

export const addingFlat=(reqObj)=> async dispatch => {
    dispatch({type: 'LOADING' , payload: true})
    try {
        const response = await axios.post('/api/flats/addflat', reqObj)
        localStorage.setItem('flat', JSON.stringify(response.data))
        message.success('New flat added successfully')
        dispatch({type: 'LOADING', payload:false})
        setTimeout(()=> { 
            window.location.href='/AdminHome'
        },500); 
    } catch (error) {
        console.log(error)
        message.error("Something went wrong")
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const updateFlat = (flatNo, reqObj) => async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true });
    try {
      const response = await axios.patch(`/api/flats/update/${flatNo}`, reqObj);
      localStorage.setItem('flat', JSON.stringify(response.data));
      message.success('Updated successfully');
      dispatch({ type: 'LOADING', payload: false });
      setTimeout(() => {
        window.location.href = '/adminhome';
      }, 500);
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
      dispatch({ type: 'LOADING', payload: false });
    }
  };
  
  export const deleteFlat=(reqObj)=> async dispatch => {
    dispatch({type: 'LOADING' , payload: true})
    try {
        const response = await axios.post('/api/flats/deleteflat', reqObj)
        localStorage.setItem('flat', JSON.stringify(response.data))
        message.success('New flat added successfully')
        dispatch({type: 'LOADING', payload:false})
        setTimeout(()=> { 
            window.location.reload()
        },500); 
    } catch (error) {
        console.log(error)
        message.error("Something went wrong")
        dispatch({type: 'LOADING' , payload:false})
    }
}