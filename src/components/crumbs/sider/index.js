import React from 'react'
import { Menu, Layout, Divider, Avatar} from 'antd'
import { 
    UploadOutlined, 
    UserOutlined,  
    ShopOutlined,
    DashboardOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'


function SideBar({defaultPage, data}) {
    return (
        <Layout.Sider
            width={250}
            className="vh-100"
            breakpoint="lg"
            collapsedWidth="0"
            style={{
                height:'inherit',
                backgroundColor: '#3F51B5',
            }}
            >
            <div className="mt-3 text-center">
                <Link to="/">
                    <img alt="..." src="../resource/logo.png" width="120px" />
                </Link>
            </div>
                <Divider className="bg-white "/>
            <div className="text-center my-3">
                <Avatar className="bg-primary text-white" size={80} src={data.profile_pics || ''}>{data.first_name}</Avatar>
                <p className={`${data.first_name?'d-block':'d-none'} fs-6 fw-bold text-light my-3`}>{`${data.first_name}  ${data.last_name}`}</p>
            </div>
                <Divider className="bg-white "/>
            <Menu 
                theme="dark" 
                mode="inline" 
                defaultSelectedKeys={[`${defaultPage}`]} 
                style={{
                        backgroundColor: '#3F51B5'
                    }}
                className="fs-6"
            >
                <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                    <Link to='/user/dashboard'>Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="profile" icon={<UserOutlined />}>
                    <Link to='/user/profile'>Profile</Link>
                </Menu.Item>
                <Menu.Item key="products" icon={<ShopOutlined />}>
                    <Link to='/user/products'>Products</Link>
                </Menu.Item>
                <Menu.Item key="add_product" icon={<UploadOutlined />}>
                    <Link to='/user/add_product'>Add Product</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}

export default SideBar
