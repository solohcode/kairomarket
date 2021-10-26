import React from 'react'
import {
    ShoppingCartOutlined,
    AppstoreOutlined, 
    ShopOutlined,
    ShoppingOutlined}
 from '@ant-design/icons'

export default function Bread() {
    return (
        <div className="bread w-100 bg-light shadow-sm d-none d-md-flex">
            <div className="container-fluid w-100">
                <div className="row text-center px-5 my-3">
                    <div className="col-md-2">
                        <span><ShoppingCartOutlined /> VARIABLE PRODUCT</span>
                    </div>
                    <div className="col-md-2">
                        <span><span className="fas fa-map-marked-alt" /> GOOGLE MAP</span>
                    </div>
                    <div className="col-md-2">
                        <span><AppstoreOutlined /> CATEGORIES</span>
                    </div>
                    <div className="col-md-2">
                        <span><ShopOutlined /> STORES</span>
                    </div>
                    <div className="col-md-2">
                        <span><span className="far fa-newspaper" /> NEWS</span>
                    </div>
                    <div className="col-md-2">
                        <span><ShoppingOutlined /> MEGA SALES</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
