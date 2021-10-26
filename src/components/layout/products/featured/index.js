/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Card, Dropdown, Image, Tooltip} from 'antd';
import { EyeOutlined, PicLeftOutlined } from '@ant-design/icons';

const { Meta } = Card;


export default function Featured({products, loading, moreDetails, addToCart}) {

    const data = [...products]

    return (
        <div>
            <div className="container-lg">
                <div className="my-4 fs-4 fw-bold">
                    <span>FEATURED DEALS <PicLeftOutlined /></span>
                </div>
                <div className="w-100 p-0 m-0">
                    <Card
                        loading={loading}
                    >
                        <div className="w-100 d-none d-md-block">
                        <div className="row">
                            {
                            data && data.splice(0,4).map((prod, index)=>(
                                <div key={index} className="col-12 col-sm-6 col-md-3 my-2 ">
                                    <Card
                                        style={{height:'430px'}}
                                        hoverable
                                        className="prod-card shadow-sm"
                                        cover={
                                        <div className="w-100 prod-img">
                                            <Image
                                                alt='...'
                                                src={prod.image}
                                                width='100%'
                                                height='180px'
                                            />
                                            <button onClick={()=> addToCart(prod)} className="atc w-100 btn btn-toCart">ADD TO CART</button>
                                        </div>
                                        }

                                        actions={[
                                            <Dropdown overlay={moreDetails(prod.phone_no, prod.social_handle, prod.address)} placement="bottomCenter" trigger={['click']}>
                                                <Tooltip title="View More Details" color="orange">
                                                    <EyeOutlined className="text-secondary fs-4"/> 
                                                </Tooltip>
                                            </Dropdown>,
                                            <span className="fs-5 text-secondary">{`₦${prod.price}`}</span>,
                                        ]}
                                        >
                                        <Meta
                                        title={prod.product_name}
                                        description={(<p style={{margin:'0px',height:'80px', overflowY:'auto'}}>{prod.description}</p>)}
                                        />
                                    </Card>

                                </div>
                            ))
                            }
                        </div>
                        </div>

                        <div className="d-flex d-md-none" style={{height:'460px', overflowX:'scroll'}}>
                            {
                            data && data.splice(0,4).map((prod, index)=>(
                                <div key={index} className="w-100 mx-3">
                                    <Card
                                        style={{height:'400px',width:'200px'}}
                                        hoverable
                                        className="prod-card shadow-sm"
                                        cover={
                                        <div className="w-100 prod-img">
                                            <Image
                                                alt='...'
                                                src={prod.image}
                                                width='100%'
                                                height='180px'
                                            />
                                            <button onClick={()=> addToCart(prod)} className="atc w-100 btn btn-toCart">ADD TO CART</button>
                                        </div>
                                        }

                                        actions={[
                                            <Dropdown overlay={moreDetails(prod.phone_no, prod.social_handle, prod.address)} placement="bottomCenter" trigger={['click']}>
                                                <Tooltip title="View More Details" color="orange">
                                                    <EyeOutlined className="text-secondary fs-4"/> 
                                                </Tooltip>
                                            </Dropdown>,
                                            <span className="fs-5 text-secondary">{`₦${prod.price}`}</span>,
                                        ]}
                                        >
                                        <Card.Meta
                                        title={prod.product_name}
                                        description={(<p style={{margin:'0px',height:'80px', overflowY:'auto'}}>{prod.description}</p>)}
                                        />
                                    </Card>

                                </div>
                            ))
                        }
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
