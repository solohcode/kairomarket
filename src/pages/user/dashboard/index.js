/* eslint-disable no-mixed-operators */
import { EyeOutlined, ShopOutlined } from '@ant-design/icons'
import { Card, Spin, Table, Image, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


function UserDashboard({loading, product}) {

    const data = [...product || []]

    const tableColumns = [
        {
            title: 'Img',
            dataIndex: 'image',
            key: 'id',
            render: (data)=>(
                <Image width={50} alt="..." src={data} />
            )
        },
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'id',
        },
        {
            title: 'Product Description',
            dataIndex: 'description',
            key: 'id',
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'id',
        },
    ]


    return (
        <Spin spinning={false} size="large" >
            <div className="w-100">
                <Card loading={loading} className="container py-md-4 px-md-5">
                    <div className="row px-lg-5 text-center">
                        <div className="col-6 px-lg-5">
                            <div class="text-white bg-primary rounded-3" style={{height:'150px'}}>
                                <div class="float-md-start text-start py-4 py-md-5 ps-3">
                                    <p class="fs-5 m-0">User Products</p>
                                    <p class="fs-1 fw-bold m-0 lh-1">{`0${product && product.length || 0 }`}</p>
                                </div>
                                <div className="d-none d-md-block float-md-end pe-md-3" style={{fontSize:'80px'}}>
                                    <ShopOutlined/>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 px-lg-5">
                            <div class="text-white bg-danger rounded-3" style={{height:'150px'}}>
                                <div class="float-md-start text-start py-4 py-md-5 ps-3">
                                    <p class="fs-5 m-0">Customer Views</p>
                                    <p class="fs-1 fw-bold m-0 lh-1">00</p>
                                </div>
                                <div className="d-none d-md-block float-md-end pe-md-3" style={{fontSize:'80px'}}>
                                    <EyeOutlined/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>


            {/* <Divider/> */}
            <div className="w-100 px-md-5">
                <div>
                    <Button type="primary"><Link to='/user/products'>View all products</Link></Button>
                </div>
                <div style={{height:'250px',overflowX:'auto'}}>
                    <Table bordered columns={tableColumns} dataSource={data.splice(0, 4)} loading={loading} style={{width:'100%'}} pagination />
                </div>
            </div>
        </Spin>
    )
}

export default UserDashboard
