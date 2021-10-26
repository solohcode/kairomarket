import { EyeOutlined, SearchOutlined } from '@ant-design/icons'
import { Empty, Input, Card,Image, Dropdown, Tooltip,Pagination, Carousel, notification } from 'antd'
import React,{useState} from 'react'
import ban from '../../../../resources/images/banner.png'
import ban2 from '../../../../resources/images/banner2.png'
import ban3 from '../../../../resources/images/banner3.png'
import ban4 from '../../../../resources/images/banner4.png'
import ban5 from '../../../../resources/images/banner5.png'
import ban6 from '../../../../resources/images/banner6.png'
import ban7 from '../../../../resources/images/banner7.png'
import './index.css'

export default function CatSearch({dispatch, searchResult, moreDetails, addToCart}) {

    const pagesize = 4
    const [from, setFrom] = useState(0)
    const data = [...searchResult]
    const handlePagination = (value)=>{
        setFrom(pagesize*(value-1))
    }

    const [search, setSearch] = useState({search_term:''})
    const handleChange =(e)=>{
        const value = e.target.value
        setSearch({search_term: value})
    }
    
    const handleSubmit=()=>{
        if(search.length){
            dispatch({
                type: 'product/SEARCH_PRODUCT',
                payload: search
            })
        }else{
            notification.warning({
                message:'Please input product name to search'
            })
        }
    }


    return (
        <div className="d-none d-md-block">
            <div className=" my-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="catsch-lt mx-auto rounded">
                                <div className="w-75 mx-auto py-3">
                                    <Tooltip title='click on the search icon to search' placement="topRight">
                                        <Input onChange={handleChange} allowClear placeholder="Enter Keyword" suffix={<SearchOutlined className="fs-5" onClick={handleSubmit} />} required />
                                    </Tooltip>
                                </div>
                                <ul className="list-group list-group-flush fs-6">
                                    <li className="list-group-item border border-left-0 border-right-0"><span className="fas fa-plug" /> Electronics</li>
                                    <li className="list-group-item border border-left-0 border-right-0"><span className="fas fa-tshirt" /> Fashion</li>
                                    <li className="list-group-item border border-left-0 border-right-0"><span className="fas fa-puzzle-piece" /> Fun Items</li>
                                    <li className="list-group-item border border-left-0 border-right-0"><span className="fas fa-gifts" /> Gifts</li>
                                    <li className="list-group-item border border-left-0 border-right-0"><span className="fas fa-heartbeat" />  Health</li>
                                    <li className="list-group-item border border-left-0 border-right-0"><span className="fas fa-drumstick-bite" /> Food and Nutrition</li>
                                    <li className="list-group-item border border-left-0 border-right-0"><span className="fas fa-tags" /> Others</li>
                                </ul>
                                <div className="foot"></div>
                            </div>
                        </div>

                        <div className={`col-md-5 ${!searchResult.length?'d-block':'d-none'}`}>
                            <Carousel autoplay effect="fade">
                                <div>
                                    <img src={ban} alt="banner" width="100%" />
                                </div>
                                <div>
                                    <img src={ban2} alt="banner" width="100%" />
                                </div>
                                <div>
                                    <img src={ban3} alt="banner" width="100%" />
                                </div>
                                <div>
                                    <img src={ban4} alt="banner" width="100%" />
                                </div>
                                <div>
                                    <img src={ban5} alt="banner" width="100%" />
                                </div>
                                <div>
                                    <img src={ban6} alt="banner" width="100%" />
                                </div>
                                <div>
                                    <img src={ban7} alt="banner" width="100%" />
                                </div>
                            </Carousel>
                        </div>

                        <div className={`col-md-4 ${searchResult.length === 0?'d-block':'d-none'}`}>
                            <div className="catsch-rt mx-auto bg-light p-4">
                                <div className="p-3 fs-3 fw-bold">
                                    <span className="">Kairo Market Mini E-commerce.</span>
                                </div>
                                <div className>
                                    <span>
                                        Kairo market is a local government general 
                                        state market situated at Oshodi Isolo Local 
                                        Government, It is one of the biggest in Lagos 
                                        Nigeria and africa at large.
                                        Visit Kairo market today :).
                                    </span>
                                </div>
                                <div className="foot mx-auto my-4" style={{background:'silver'}}></div>
                            </div>
                        </div>

                        {/* search result section  */}
                        <div className={`col-md-9 ${searchResult.length === 0?'d-none':'d-block'}`}>
                            <div className="fs-5">
                                <p className='m-0'>Search Result</p>
                            </div>
                            <div className="w-100">
                                <div className="row">
                                    {
                                        searchResult.length === 0? <Empty/>:
                                        data && data.splice(from, pagesize).map((prod, index)=>(
                                            <div key={index} className="col-3 my-2 ">
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
                                                        <button onClick={()=> addToCart(prod) } className="atc w-100 btn btn-toCart">ADD TO CART</button>
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
                            </div>

                            {/* pagination button  */}
                            <div className="my-4 text-center">
                            <Pagination onChange={handlePagination} defaultCurrent={1} total={searchResult.length} pageSize={pagesize}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="w-100 bg-light" style={{height:'50px'}}></div>
        </div>
    )
}
