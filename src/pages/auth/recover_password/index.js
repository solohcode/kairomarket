import { MailOutlined, UnlockOutlined} from '@ant-design/icons'
import { Button, Card, Form, Input } from 'antd'
import React from 'react'

function Recover({loading, dispatch}) {


    const handleSubmit =(value)=>{
        dispatch({
            type:'user/FORGOT_PASSWORD',
            payload: value
        })
    }
    return (
        <div className="py-3 py-md-5">
            <div className="container-lg">
                <Card className="container-lg px-md-5 rounded-3">
                    <div className="text-secondary text-center py-4">
                        <h5 className="d-inline mx-3">Input email below</h5>
                    </div>

                    <Form className="px-md-5" onFinish={handleSubmit}>
                        <Form.Item className="px-md-5" name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input size="large" type="email" allowClear prefix={<MailOutlined/>} />
                        </Form.Item>
                        <Form.Item className="w-50 mx-auto">
                            <Button icon={<UnlockOutlined />} loading={loading} htmlType="submit" type="primary" size="large" block>Recover password</Button>
                        </Form.Item>
                    </Form>

                    
                </Card>
            </div>
        </div>
    )
}


export default Recover