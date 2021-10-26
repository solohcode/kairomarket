/* eslint-disable no-mixed-operators */
import { ShopOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons'
import { Spin, Card, Tabs, Avatar, Button, Form, Input} from 'antd'
import React, { useState } from 'react'




function UserEditProfile({data, dispatch, loading}) {
    const [dp, setDp] = useState({})

    const handleImg =(e)=>{
        const {files} = e.target
        setDp(files[0])
    }
    const handleSubmit =(value)=>{
        const formD = new FormData()
        const {first_name,last_name,about_user,email,phone_no,social_handle,business_name,about_business,products,services,address,business_website} = value
        formD.append('profile_pics', dp)
        formD.append('first_name', first_name)
        formD.append('last_name', last_name)
        formD.append('about_user', about_user)
        formD.append('email', email)
        formD.append('phone_no', phone_no)
        formD.append('social_handle', social_handle)
        formD.append('business_name', business_name)
        formD.append('about_business', about_business)
        formD.append('products', products)
        formD.append('services', services)
        formD.append('address', address)
        formD.append('business_website', business_website)
        dispatch({
                type: 'profile/UPDATE_PROFILE',
                payload: formD
            })
    }

    const UserInfo=()=>(
        <div className="w-100 overflow-auto">
            <div className="d-md-flex">
                <div class="list-group list-group-flush m-0 w-100">
                    <li className="list-group-item bg-light text-secondary fw-bold">First Name</li>
                    <Form.Item className="list-group-item my-0" name='first_name'>
                        <Input size='large' placeholder={data && data.first_name || 'first name'} />
                    </Form.Item>
                    <li className="list-group-item bg-light text-secondary fw-bold">Email</li>
                    <Form.Item className="list-group-item my-0" name='email'>
                        <Input size='large' placeholder={data && data.email || 'email'} />
                    </Form.Item>
                </div>
                <div class="list-group list-group-flush m-0 w-100">
                    
                <li className="list-group-item bg-light text-secondary fw-bold">Last Name</li>
                    <Form.Item className="list-group-item my-0" name='last_name'>
                        <Input size='large' placeholder={data && data.last_name || 'last name'} />
                    </Form.Item>
                    <li className="list-group-item bg-light text-secondary fw-bold">Mobile Number</li>
                    <Form.Item className="list-group-item my-0" name='phone_no'>
                        <Input size='large' placeholder={data && data.phone_no || 'mobile number'} />
                    </Form.Item>
                </div>
            </div>
            <li className="list-group-item bg-light text-secondary fw-bold">About You</li>
            <Form.Item className="list-group-item" name='about_user'>
                <Input.TextArea size='large' placeholder={data && data.about_user || 'about you'} />
            </Form.Item>
        </div>
    )

    const BusinessInfo=()=>(
        <div className="w-100 overflow-auto">
            <div className="d-md-flex">
                <div class="list-group list-group-flush m-0 w-100">
                    <li className="list-group-item bg-light text-secondary fw-bold">Business Name</li>
                    <Form.Item className="list-group-item my-0" name='business_name'>
                        <Input size='large' placeholder={data && data.business_name || 'business name'} />
                    </Form.Item>
                    <li className="list-group-item bg-light text-secondary fw-bold">Business Website</li>
                    <Form.Item className="list-group-item my-0" name='business_website'>
                        <Input size='large' placeholder={data && data.business_website || 'business website url'} />
                    </Form.Item>
                    <li className="list-group-item bg-light text-secondary fw-bold">Products</li>
                    <Form.Item className="list-group-item my-0" name='products'>
                        <Input size='large' placeholder={data && data.products || 'products'} />
                    </Form.Item>
                </div>
                <div class="list-group list-group-flush m-0 w-100">
                    
                <li className="list-group-item bg-light text-secondary fw-bold">Business Address</li>
                    <Form.Item className="list-group-item my-0" name='business_address'>
                        <Input size='large' placeholder={data && data.business_address || 'business address'} />
                    </Form.Item>
                    <li className="list-group-item bg-light text-secondary fw-bold">Business Whatsapp Number</li>
                    <Form.Item className="list-group-item my-0" name='social_handle'>
                        <Input size='large' placeholder={data && data.social_handle || 'business whatsapp number'} />
                    </Form.Item>
                    <li className="list-group-item bg-light text-secondary fw-bold">Services</li>
                    <Form.Item className="list-group-item my-0" name='services'>
                        <Input size='large' placeholder={data && data.services || 'services'} />
                    </Form.Item>
                </div>
            </div>
            <li className="list-group-item bg-light text-secondary fw-bold">About Your Business</li>
            <Form.Item className="list-group-item" name='about_business'>
                <Input.TextArea size='large' placeholder={data && data.about_business || 'about your business'} />
            </Form.Item>
        </div>
    )

    return (
        <Spin size="large" spinning={false} >
            <Card className="mt-lg-3 pt-2 px-0 shadow-sm" style={{height:'inherit'}}>
                <div className="w-100">
                    <Form className="row" onFinish={handleSubmit}>
                        <div className="col-12 col-md-4 text-center py-lg-5">
                            <Avatar className="bg-primary text-white mb-3" src={data && data.profile_pics} size={100}>{data && data.first_name || 'empty'}</Avatar>
                            <Form.Item name='profile_pics'>
                                <input onChange={handleImg} className="form-control form-control-sm w-50 mx-auto" id="formFileSm" type="file"/>
                            </Form.Item>
                        </div>
                        <div className="col-md-8">
                            <Tabs defaultActiveKey="1" centered style={{overflowY:'auto'}}>
                                <Tabs.TabPane tab={<span className="fs-6"><UserOutlined/> Edit Personal Data</span>} key="1">
                                    <UserInfo/>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab={<span className="fs-6"><ShopOutlined/> Edit Business Data</span>} key="2">
                                    <BusinessInfo/>
                                </Tabs.TabPane>
                            </Tabs>
                        </div>

                        <div className="text-center mt-3">
                            <Button loading={loading} htmlType="submit" className="w-75" type="primary" size='large' icon={<UploadOutlined/>}>Update Profile</Button>
                        </div>
                    </Form>
                </div>
            </Card>
        </Spin>
    )
}

export default UserEditProfile
