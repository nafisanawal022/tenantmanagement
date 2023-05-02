import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';



function Register() {
  const dispatch = useDispatch()
  function onFinish(values) {
    dispatch(userRegister(values))
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
        <h2 style={{ textAlign: 'center', color: '#22526A' }}>Registration</h2>

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
          label="Contact Number"
          name="contactNumber"
          rules={[{ required: true, message: 'Please input your contact number!' }]}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item
          label="Alternate Contact Number"
          name="altContactNumber"
          rules={[{ required: true, message: 'Please input your alternate contact number!' }]}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item
          label="NID No."
          name="nidNo"
          rules={[{ required: true, message: 'Please input your NID no.!' }]}
        >
          <Input />
        </Form.Item>

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
          <Button type="primary" htmlType="submit" href="/login" style={{ backgroundColor: '#22526A' }}>Register
          </Button>
        </Form.Item>

        <Link to="/login" style={{ color: 'black' }}>Click here to login</Link>
      </Form>
    </div>
  );
}
export default Register;