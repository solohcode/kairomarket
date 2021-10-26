import { Card, Form, Input, Button, notification } from 'antd'
import React from 'react'
import { MailOutlined, KeyOutlined, RestOutlined } from '@ant-design/icons'
import Top from '../../../components/crumbs/header/top'
import HeadNav from '../../../components/crumbs/header'
import { connect } from 'react-redux'



const mapStateToProps = ({dispatch, user})=>({
    dispatch,
    loading: user.loading
   })
function Reset(props) {
    const {loading, dispatch, match} = props


    const handleSubmit=(value)=>{
        const {email,password, password_confirmation} = value
        const resetData = {
            email,
            password,
            password_confirmation,
            token: match && match.params.id
        }

        if(password === password_confirmation){
            dispatch({
                type:'user/RESET_PASSWORD',
                payload: resetData
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
        <div>
            <Top/>
            <HeadNav auPage={true}/> 
        <div className="py-3 py-md-5">
            <div className="container-lg">
                <Card className="container-lg px-md-5 rounded-3">
                    <div className="text-secondary text-center py-4">
                        <h5 className="d-inline mx-3">Choose a new password below</h5>
                    </div>

                    <Form className="row" onFinish={handleSubmit}>
                        <Form.Item className="col-12 col-sm-12 px-2" name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input size="large" type="email" allowClear prefix={<MailOutlined/>} />
                        </Form.Item>
                        <Form.Item className="col-12 col-sm-6 px-2" name="password" label="Password" rules={[{ required: true, message: 'Please input a password!' }]}>
                            <Input.Password size="large" type="password" allowClear prefix={<KeyOutlined/>} />
                        </Form.Item>
                        <Form.Item className="col-12 col-sm-6 px-2" name="password_confirmation" label="Confirm Password" rules={[{ required: true, message: 'Please confirm your password!' }]}>
                            <Input.Password size="large" type="password" allowClear prefix={<KeyOutlined/>} />
                        </Form.Item>
                        <Form.Item className="w-50 mx-auto">
                            <Button icon={<RestOutlined />} loading={loading} htmlType="submit" type="primary" size="large" block>Reset password</Button>
                        </Form.Item>
                    </Form>

                    
                </Card>
            </div>
        </div>
        </div>
    )
}

export default connect(mapStateToProps)(Reset)
