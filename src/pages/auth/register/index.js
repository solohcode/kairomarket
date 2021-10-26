import { Card, Form, Input, Button, notification } from 'antd'
import React from 'react'
import { MailOutlined, KeyOutlined, UserOutlined, PhoneOutlined, UserAddOutlined } from '@ant-design/icons'

function Register({loading, dispatch}) {


    const handleSubmit=(value)=>{
        const {password, password_confirmation} = value

        if(password === password_confirmation){
            dispatch({
                type:'user/REGISTER',
                payload: value
            })
        }else{
            notification.error({
                message: 'Password Does Not Match',
                style:{
                    marginTop: '10vh'
                  }
            })
        }
    }
    return (
        <div className="py-3 py-md-5">
            <div className="container-lg">
                <Card className="container-lg px-md-5 rounded-3">
                    <div className="text-secondary text-center py-4">
                        <h5 className="d-inline mx-3">Input Required Details below</h5>
                    </div>

                    <Form className="row" onFinish={handleSubmit}>
                        <Form.Item className="col-12 col-sm-6 px-2" name="first_name" label="First Name" rules={[{ required: true, message: 'Please input your first name!' }]}>
                            <Input size="large" type="text" allowClear prefix={<UserOutlined/>} />
                        </Form.Item>
                        <Form.Item className="col-12 col-sm-6 px-2" name="last_name" label="Last Name" rules={[{ required: true, message: 'Please input your last name!' }]}>
                            <Input size="large" type="text" allowClear prefix={<UserOutlined/>} />
                        </Form.Item>
                        <Form.Item className="col-12 col-sm-6 px-2" name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input size="large" type="email" allowClear prefix={<MailOutlined/>} />
                        </Form.Item>
                        <Form.Item className="col-12 col-sm-6 px-2" name="phone_no" label="Mobile Number" rules={[{ required: true, message: 'Please input your mobile number!' }]}>
                            <Input size="large" type="tel" allowClear prefix={<PhoneOutlined/>} />
                        </Form.Item>
                        <Form.Item className="col-12 col-sm-6 px-2" name="password" label="Password" rules={[{ required: true, message: 'Please input a password!' }]}>
                            <Input.Password size="large" type="password" allowClear prefix={<KeyOutlined/>} />
                        </Form.Item>
                        <Form.Item className="col-12 col-sm-6 px-2" name="password_confirmation" label="Confirm Password" rules={[{ required: true, message: 'Please confirm your password!' }]}>
                            <Input.Password size="large" type="password" allowClear prefix={<KeyOutlined/>} />
                        </Form.Item>
                        <Form.Item className="w-50 mx-auto">
                            <Button icon={<UserAddOutlined/>} loading={loading} htmlType="submit" type="primary" size="large" block>Register</Button>
                        </Form.Item>
                    </Form>

                    
                </Card>
            </div>
        </div>
    )
}

export default Register
