import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react'

function SignupScreen() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 12,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 6,
              span: 12,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 12 ,
            }}
          >
            <Button type="primary" htmlType="submit">
              REGISTER
            </Button>
          </Form.Item>
        </Form>
      );
}

export default SignupScreen