import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons'
import { Divider } from 'antd'
import React from 'react'
import logo from '../../../resources/images/logo2.png'
import './index.css'

export function Footer() {
    return (
        <div>
            <Divider className="mt-0"/>
            <div className="container-md">
                <div className="row">
                    <div className="col-md-5 px-3">
                        <div className="">
                            <span className="fs-2 fw-bold">Welcome to</span>
                            <img src={logo} alt="logo" width="200px"/>
                        </div>
                        <div>
                            <p className="">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 
                            1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. It has survived not only five centuries, but also 
                            the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-md-4 px-md-4">
                        <span className="fs-4 fw-bold">Tags</span>
                        <div className="mx-md-3 mt-md-5">
                            <p className="">Location</p>
                            <p className="">Local Market</p>
                            <p className="">State Market</p>
                            <p className="">International Market</p>
                        </div>
                    </div>

                    <div className="col-md-3 px-md-4">
                        <span className="fs-4 fw-bold">Categories</span>
                        <div className="mx-md-3 mt-md-5">
                            <p className="">Gifts</p>
                            <p className="">Products</p>
                            <p className="">Markets around you</p>
                            <p className="">Event around you</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function Bottom() {
    return (
        <div className="bottom">
            <div className="mx-auto">
            <div className="px-5 py-2">
                <div className="float-md-left ">
                    <div className="pt-3">
                        <span className="">
                            <span className="fw-bold">Copyright 2021</span>
                            <span>-Kairo Market, a local market directory to satisfy your purchase </span>
                            <span className="fw-bold">by Techend Limited</span>
                        </span>
                    </div>
                </div>
                <div className="float-md-right fs-3">
                    <div className="mr-md-5">
                        <FacebookFilled className="mx-md-1" />
                        <InstagramFilled className="mx-md-1"/>
                        <TwitterSquareFilled className="mx-md-1"/>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
