import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../redux/actions/adminActions';

function AdminLogin() {
  const dispatch = useDispatch()
  function onFinish(values){
    dispatch(adminLogin(values))
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(135deg, #22526A 0%, #15B5B5 100%)' }}>
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}
      >
        <h2 style={{ textAlign: 'center' }}>Admin</h2>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your flat number (e.g. 4A)!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} maxLength={10} placeholder="Flat No. (e.g. 4A)" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn btn-primary btn-block mb-4" style={{ backgroundColor: '#22526A' }}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AdminLogin;
