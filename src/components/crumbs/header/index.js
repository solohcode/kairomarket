/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Select,Form, Button, message, Badge } from 'antd'
import logo from '../../../resources/images/logo.png'
import './index.css'

import { 
    EnvironmentOutlined,
    GiftOutlined,
    ShoppingCartOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons'




export default function HeadNav({dispatch, loading, auPage, cart}) {
    const [param, setParam] = useState({search_term: ''})

    const handleChange =(e)=>{
        const {value} = e.target
        setParam({search_term: value})
    }

    const handleSubmit =()=>{
        if(param.search_term){
            dispatch({
                type: 'product/SEARCH_PRODUCT',
                payload: param
            })
        }else{
            message.error({
                content: 'Please input product name to search',
                style:{
                    marginTop:'10vh',
                    right: '0'
                }
            })
        }
    }
    
        document && document.addEventListener("DOMContentLoaded", function(){
        window && window.addEventListener('scroll', function() {
            if (window && window.pageYOffset > 50) {
            document && document.getElementById('navbar').classList.add('fixed-top') || '';
            // add padding top to show content behind navbar
            let navbar_height = document && document.querySelector('.navbar').offsetHeight || '';
            document.body.style.paddingTop = navbar_height + 'px';
            } else {
            document && document.getElementById('navbar').classList.remove('fixed-top'||'') || '';
            // remove padding top from body
            document.body.style.paddingTop = '0';
            } 
        });
    });
    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark" >
                <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img src={logo} alt='logo' width='140px' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="d-flex d-lg-none">
                            <li className="nav-item my-md-4">
                                <Link to="/auth/login" className="mx-2 btn btn-outline-light"><UserOutlined/> <b>Login</b></Link> <Link to="/auth/register" className="mx-2 btn btn-outline-light"><UserAddOutlined/> <b>Register</b></Link>
                            </li>
                        </div>
                    
                    </ul>
                    <div className={`${auPage?'d-none':'d-flex'}`}>
                        <Form className="d-none d-md-flex">
                            <Input onChange={handleChange} name="search_term" size='medium' className="me-2 my-3 mx-md-3"suffix={<GiftOutlined/>} placeholder="Search Product" />
                            <Select className="me-2 my-3 mx-md-3" size="large" placeholder="Select Category" defaultValue='default' style={{minWidth:'200px'}}>
                                <Select.Option value='default'>Select Categories</Select.Option>
                                <Select.Option value="1">One</Select.Option>
                                <Select.Option value="2">Two</Select.Option>
                                <Select.Option value="3">Three</Select.Option>
                            </Select>
                            <Input name='search_location' size='medium' className="me-2 my-3 mx-md-3" suffix={<EnvironmentOutlined />} placeholder="Your Location"/>
                            <Button loading={loading} onClick={handleSubmit} className="btn btn-light my-3" type="submit"><i className="fa fa-search"></i> Search</Button>
                        </Form>
                    </div>
                    </div>
                    <Link to="/cart" className={` ms-4 ${!cart?'d-none':'d-block'}`}>
                        <Badge className='float-end' count={cart} style={{backgroundColor: '#F58634'}}>
                                <ShoppingCartOutlined className="fs-4 text-white"/>
                        </Badge>
                    </Link>
                </div>
            </nav>
        </div>
    )
}