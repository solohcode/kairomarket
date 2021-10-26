import { KeyOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Login({loading, dispatch}) {


    const handleSubmit =(value)=>{
        dispatch({
            type:'user/LOGIN',
            payload: value
        })
    }
    return (
        <div className="py-3 py-md-5">
            <div className="container-lg">
                <Card className="container-lg px-md-5 rounded-3">
                    <div className="text-secondary text-center py-4">
                        <h5 className="d-inline mx-3">Login below</h5>
                    </div>

                    <Form className="px-md-5" onFinish={handleSubmit}>
                        <Form.Item className="px-md-5" name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input size="large" type="email" allowClear prefix={<MailOutlined/>} />
                        </Form.Item>
                        <Form.Item className="px-md-5" name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password size="large" type="password" allowClear prefix={<KeyOutlined/>} />
                        </Form.Item>
                        <div className="text-center">
                            <p>Forgotten your password? <Link to="/auth/recover_password"> Recover Now</Link></p>
                        </div>
                        <Form.Item className="w-50 mx-auto">
                            <Button icon={<UserOutlined/>} loading={loading} htmlType="submit" type="primary" size="large" block>Login</Button>
                        </Form.Item>
                    </Form>

                    
                </Card>
            </div>
        </div>
    )
}


export default Login