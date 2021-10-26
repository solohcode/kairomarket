/* eslint-disable no-mixed-operators */
import { ShopOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Tabs, Spin, Avatar, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function UserProfile({data}) {

    const UserInfo=()=>(
        <div className="w-100 overflow-auto">
            <div className="d-lg-flex">
                <ul class="list-group list-group-flush m-0 w-100">
                    <li class="list-group-item bg-light text-secondary fw-bold">First Name</li>
                    <li class="list-group-item">{data && data.first_name || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Email</li>
                    <li class="list-group-item">{data && data.email || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">About You</li>
                    <li class="list-group-item">{data && data.about_user || 'empty'}</li>
                </ul>
                <ul class="list-group list-group-flush m-0 w-100">
                    <li class="list-group-item bg-light text-secondary fw-bold">Last Name</li>
                    <li class="list-group-item">{data && data.last_name || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Mobile Number</li>
                    <li class="list-group-item">{data && data.phone_no || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Joined Date</li>
                    <li class="list-group-item">{data && data.date_entered || 'empty'}</li>
                </ul>
            </div>
        </div>
    )

    const BusinessInfo=()=>(
        <div className="w-100 overflow-auto">
            <div className="d-lg-flex">
                <ul class="list-group list-group-flush m-0 w-100">
                    <li class="list-group-item bg-light text-secondary fw-bold">Business Name</li>
                    <li class="list-group-item">{data && data.business_name || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Business Website</li>
                    <li class="list-group-item">{data && data.business_website || 'not available' || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Products</li>
                    <li class="list-group-item">{data && data.products || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Business Whatsapp Number</li>
                    <li class="list-group-item">{data && data.social_handle || 'empty'}</li>
                </ul>
                <ul class="list-group list-group-flush m-0 w-100">
                    <li class="list-group-item bg-light text-secondary fw-bold">About Business</li>
                    <li class="list-group-item">{data && data.about_business || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Business Address</li>
                    <li class="list-group-item">{data && data.address || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Services</li>
                    <li class="list-group-item">{data && data.services || 'empty'}</li>
                    <li class="list-group-item bg-light text-secondary fw-bold">Created Date</li>
                    <li class="list-group-item">{data && data.date_entered || 'empty'}</li>
                </ul>
            </div>
        </div>
    )
    return (
        <Spin size="large" spinning={false} >
            <Card className="mt-lg-4 py-3 px-0 shadow-sm" style={{height:'inherit'}}>
                <div className="w-100 p-0">
                    <div className="row">
                        <div className="col-md-4 py-lg-5">
                            <div className="text-center">
                                <Link to="/user/edit_profile">
                                    <Avatar className="bg-primary text-white" src={data && data.profile_pics} size={120}>{data && data.first_name}</Avatar>
                                </Link>
                                <div className={`my-3 ${ data?'d-block':'d-none'}`}>
                                    <p className='fs-5 text-secondary fw-bold m-0'>{`${data && data.first_name}  ${data && data.last_name}`}</p>
                                    <p className="m-0 text-secondary">{data && data.email}</p>
                                </div>
                                <div>
                                    <Button><Link to="/user/edit_profile">Update Profile</Link></Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <Tabs defaultActiveKey="1" centered style={{overflowY:'auto'}}>
                                <Tabs.TabPane tab={<span className="fs-6"><UserOutlined/> Personal Info</span>} key="1">
                                    <UserInfo/>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab={<span className="fs-6"><ShopOutlined/> Business Info</span>} key="2">
                                    <BusinessInfo/>
                                </Tabs.TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </Card>
        </Spin>
    )
}

export default UserProfile
