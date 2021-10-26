import React from 'react'
import {Layout, Breadcrumb, Button, Alert, Tooltip} from 'antd'
import { ExclamationCircleOutlined, SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { TextLoop } from 'react-text-loop-next';



function UserHeader({spin, bread, update, prod, logout}) {

    return (
        <Layout.Header className="bg-light px-2 px-md-3 pt-3 w-100" style={{height:'50px', position:'relative' }} >
            <div className="float-start">
                {
                update?
                <Breadcrumb className='fs-6'>
                    <Breadcrumb.Item>
                        User
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {bread}
                    </Breadcrumb.Item>
                </Breadcrumb>:
                <Alert className="m-0 p-1" banner showIcon={<ExclamationCircleOutlined/>} type="warning" 
                message={
                    <TextLoop>
                        <div>Please Update Your Profile</div>
                        <div className={prod?'d-none':''}>You Do Not Have Any Product</div>
                        <div className={prod?'d-none':''}>Upload Products To Start Selling</div>
                    </TextLoop>
                }
                />
                }
            </div>
            <div className="float-end d-flex ">
                    <Link to="/user/edit_profile" className="d-none d-md-flex btn btn-link text-secondary fs-5 my-0 py-1">
                        <Tooltip overlay='Profile Setting'>
                            <SettingOutlined spin={spin}/> 
                        </Tooltip>
                    </Link>
                    <Button onClick={logout} danger className="position-inherit mx-3 my-0" type="primary" icon={<ExclamationCircleOutlined/>}>Log Out</Button>
            </div>
        </Layout.Header>
    )
}

export default UserHeader
