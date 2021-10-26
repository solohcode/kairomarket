/* eslint-disable jsx-a11y/anchor-has-content */
import { AppstoreOutlined, ClearOutlined, DeleteOutlined, EyeOutlined, TableOutlined } from '@ant-design/icons'
import { Card, Tabs, Table, Image, Button, Popconfirm, Empty, Pagination, Dropdown, Tooltip } from 'antd'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Bottom, Footer } from '../../components/crumbs/footer'
import HeadNav from '../../components/crumbs/header'
import Top from '../../components/crumbs/header/top'


const mapStateToProps=({dispatch, cart})=>({
    dispatch,
    cart: cart.cart,
    loading: cart.loading
})
function Cart({dispatch, cart, loading}) {

    const pagesize = 4
    const [from, setFrom] = useState(0)
    const data = [...cart] || []
    const handlePagination = (value)=>{
        setFrom(pagesize*(value-1))
    }


    const moreDetails = (no,sh,ad)=>(
        <div className="w-100 mx-auto bg-light p-3">
            <p className="fs-5 text-center">Get To The Seller</p>
            <p>Social Handle: <b><a target="_blank" rel="noreferrer" href={`https://wa.me/+234${sh}`} className="fab fa-whatsapp text-secondary fs-5"/></b></p>
            <p>Contact: <b><a href={`tel:+234${no}`} className="fas fa-phone text-secondary fs-5"/></b></p>
            <p className="w-100">Address: <address>{ad || 'not available'}</address></p>
            
        </div>
    )

    // delete product function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const removeProduct =(prod)=>{
        const remove ={
            e: prod,
            cart
        }
        dispatch({
            type: 'cart/REMOVE_FROM_CART',
            payload: remove
        })
    }

    // clear all product function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const clearCart =()=>{
        dispatch({
            type: 'cart/CLEAR_CART',
        })
    }
    



    // table columns >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const TableColumns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (img)=>(
                <Image src={img} alt='...' width={50} height={50} />
            )
        },
        {
            title: 'Name',
            dataIndex: 'product_name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Actions',
            render: (id)=>([
                <Popconfirm placement="topLeft" title='Are you sure you want to remove this product?' onConfirm={()=> removeProduct(id)} okText="Yes" cancelText="No">
                    <Button danger icon={<DeleteOutlined/>}>Remove</Button>
                </Popconfirm>
            ])
        },
    ]

    const CardDisplay=()=>(
        <div className="w-100">
            <div className="row">
                {
                !data.length ?<Empty/>:
                data && data.splice(from, pagesize).map((prod, index)=>(
                    <div key={index} className="col-12 col-md-4 col-lg-3 my-2 ">
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
                                    height='150px'
                                />
                                <button onClick={()=> removeProduct(prod)} className="atc w-100 btn btn-toCart">REMOVE FROM CART</button>
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
            <div className="my-4 text-center">
                <Pagination onChange={handlePagination} defaultCurrent={1} total={cart.length} pageSize={pagesize}/>
            </div>
        </div>
    )

    const TableDisplay=()=>(
        <div>
            <Table columns={TableColumns} dataSource={cart}  pagination={{ pageSize: 10 }} scroll={{ y: 300 }} />
        </div>
    )






    return (
        <>
            <Top cart={cart}/>
            <HeadNav auPage={true} cart={cart.length} />

            <div className='container py-5'>
                <Card title="Your Cart" className="w-100 shadow-sm" loading={loading}>
                    <Tabs defaultActiveKey="1" >
                        <Tabs.TabPane tab={<span className="fs-6"><AppstoreOutlined/> Card Display</span>} key="1">
                            <CardDisplay/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={<span className="fs-6"><TableOutlined/> Table Display</span>} key="2">
                            <TableDisplay/>
                        </Tabs.TabPane>
                    </Tabs>
                    <div className="w-75 mx-auto my-3">
                        <Button disabled={!data.length} onClick={clearCart} type="primary" className='w-100' icon={<ClearOutlined/>}>Clear Cart</Button>
                    </div>
                </Card>

            </div>

            <Footer/>
            <Bottom/>
        </>
    )
}

export default connect(mapStateToProps)(Cart)
