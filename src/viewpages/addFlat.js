import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addingFlat } from '../redux/actions/flatsActions';

function AddFlat() {
    const dispatch = useDispatch()
    const {loading}=useSelector(state=>state.alertsReducer)
    function onFinish(values) {
      dispatch(addingFlat(values))
      console.log('Received values of form: ', values);
    }
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #22526A 0%, #395B64 100%',
      }}
    >
      <Form

        name="basic"
        onFinish={onFinish}
        style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px' , width: '600px'}}
      >
        <br></br>
        <h2 style={{ textAlign: 'center', color: '#22526A' }}>Add To-Let</h2>

        

        <Form.Item
          label="Flat No."
          name="flatNo"
          rules={[{ required: true, message: 'Please input your flat no.!' }]}
        >
          <Input maxLength="2" />
        </Form.Item>

        <Form.Item
          label="Rent"
          name="rent"
          rules={[{ required: true, message: 'Please input the rent' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: '#22526A' }}>Add</Button>
        </Form.Item>



        <Link to="/" style={{ color: 'black' }}>Click here to view</Link>
      </Form>
    </div>
  )};

export default AddFlat;