import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { adminRegister } from '../redux/actions/adminActions';

function AdminRegister() {
  const dispatch = useDispatch();

  function onFinish(values) {
    dispatch(adminRegister(values));
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
        style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', width: '600px' }}
      >
        <br></br>
        <h2 style={{ textAlign: 'center', color: '#22526A' }}>Admin Registration</h2>

        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your ' }]}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: '#22526A' }}>
            Register
          </Button>
        </Form.Item>

        <Link to="/adminlogin" style={{ color: 'black' }}>
          Click here to login as admin
        </Link>
      </Form>
    </div>
  );
}

export default AdminRegister;
