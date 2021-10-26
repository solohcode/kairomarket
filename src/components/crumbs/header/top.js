import { DashboardOutlined, ShoppingCartOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { Badge, Divider} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import store from 'store'
import './index.css'

export default function Top({cart}) {

    const data = store.get('login-data')
    const loggedIn = data && data? data.status: false
    return (
        <div className='top d-none d-lg-block'>
            <div className="mx-5 py-md-2">
                <div className="float-left">
                    <span>Have any questions? <a href="tel:#" className="btn btn-link text-white"><b>+ 080 567 124 1880</b></a>or<a href="mailto:#" className="btn btn-link text-white"><b>mail@kairomarket.com</b></a></span>
                </div>
                <div className="float-right py-2">
                    {
                        loggedIn && loggedIn?
                        <span> <Link to="/user/dashboard" className="text-white px-2 btn-link"><DashboardOutlined/> <b>Dashboard</b></Link></span>:
                        <span> <Link to="/auth/login" className="text-white px-2 btn-link"><UserOutlined/> <b>Login</b></Link> <Divider type="vertical" className="bg-white" />  <Link to="/auth/register" className="text-white px-2 btn-link"><UserAddOutlined/> <b>Register</b></Link></span>
                    }
                    <Divider type="vertical" className="bg-white" />
                    <Link to="/cart">
                        <Badge count={cart && cart.length} style={{backgroundColor: '#F58634'}}>
                                <ShoppingCartOutlined className="fs-4 text-white"/>
                        </Badge>
                    </Link>
                </div>

            </div>
        </div>
    )
}
