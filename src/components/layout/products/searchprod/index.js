import { GiftOutlined ,EnvironmentOutlined, EyeOutlined } from '@ant-design/icons'
import { Divider, Input, Select, Empty, Card,Image, Dropdown,Tooltip,message, Button } from 'antd'
import React,{useState} from 'react'


export default function SearchProd({searchResult, moreDetails, dispatch, searchLoading, addToCart}) {
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

    return (
        <div className="d-block d-md-none">
            <div className="container-fluid w-100">
                <div className="my-3 fs-5 text-center px-3">
                    <p>ALL VARIETIES OF PRODUCT AT A SEARCH. </p>
                </div>
                <Input onChange={handleChange} name="search_term" size='large' className="me-2 my-3 mx-md-3"suffix={<GiftOutlined/>} placeholder="Search Product"/>
                <Select className="me-2 my-3 mx-md-3" size="large" placeholder="Select Category" defaultValue='default' style={{minWidth:'100%'}}>
                    <Select.Option value='default'>Select Categories</Select.Option>
                    <Select.Option value="1">One</Select.Option>
                    <Select.Option value="2">Two</Select.Option>
                    <Select.Option value="3">Three</Select.Option>
                </Select>
                <Input size='large' className="me-2 my-3 mx-md-3" suffix={<EnvironmentOutlined />} placeholder="Your Location"/>
                <div className="text-center">
                    <Button loading={searchLoading} onClick={handleSubmit} className="btn btn-light my-3" type="submit"><i className="fa fa-search"></i> Search</Button>
                </div>

                <Divider/>
            </div>


            {/* search result section  */}
            <div className={`w-100 container-fluid ${searchResult.length === 0?'d-none':'d-block'}`}>
                <div className="fs-5">
                    <p className='m-0'>Search Result</p>
                </div>
                <div className="w-100">
                    <div className="row">
                        <div className="d-flex" style={{height:'420px', overflowX:'scroll'}}>
                            {
                            searchResult.length === 0? <Empty/>:
                            searchResult && searchResult.map((prod, index)=>(
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
                                        description={(<p style={{margin:'0px',height:'80px', overflowY:'auto'}}>{prod.description}</p>)}                                        />
                                    </Card>

                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
