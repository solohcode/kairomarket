import { AppstoreOutlined, DeleteOutlined, EditOutlined, TableOutlined } from '@ant-design/icons'
import { Card, Spin, Tabs, Pagination, Image, Button, Table, Divider, Empty, Popconfirm } from 'antd'
import React,{useState} from 'react'

function UserProduct({products, dispatch}) {

    const pagesize = 4
    const [from, setFrom] = useState(0)
    const data = [...products] || []
    const handlePagination = (value)=>{
        setFrom(pagesize*(value-1))
    }

    // delete product function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const DeleteProduct =(id)=>{
        dispatch({
            type: 'product/USER_DELETE_PRODUCT',
            payload: id
        })
    }
    



    // table columns >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const TableColumns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (img)=>(
                <Image src={img} alt='...' width={50} />
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
            dataIndex: 'id',
            key: 'id',
            render: (id)=>([
                <Button type='default' icon={<EditOutlined/>}>Edit</Button>,
                <Divider type="vertical" />,
                <Popconfirm placement="topLeft" title='Are you sure you want to delete this product?' onConfirm={()=> DeleteProduct(id)} okText="Yes" cancelText="No">
                    <Button danger icon={<DeleteOutlined/>}>Delete</Button>
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
                        style={{height:'350px'}}
                        hoverable
                        className="prod-card shadow-sm"
                        cover={
                            <Image
                                alt='...'
                                src={prod.image}
                                width='100%'
                                height='150px'
                            />
                        }
                        actions={[
                            <Button type='default' icon={<EditOutlined/>}>Edit</Button>,
                            <Popconfirm placement="topLeft" title='Are you sure you want to delete this product?' onConfirm={()=> DeleteProduct(prod.id)} okText="Yes" cancelText="No">
                                <Button danger icon={<DeleteOutlined/>}>Delete</Button>
                            </Popconfirm>
                        ]}
                        >
                            <Card.Meta
                            title={prod.product_name}
                            description={(<p style={{margin:'0px',height:'50px', overflowY:'auto'}}>{prod.description}</p>)}
                            />
                        </Card>

                    </div>
                ))
                }
            </div>
            <div className="my-4 text-center">
                <Pagination onChange={handlePagination} defaultCurrent={1} total={products.length} pageSize={pagesize}/>
            </div>
        </div>
    )

    const TableDisplay=()=>(
        <div>
            <Table columns={TableColumns} dataSource={products}  pagination={{ pageSize: 10 }} scroll={{ y: 300 }} />
        </div>
    )
    return (
        <Spin spinning={false}>
            <Card className="w-100 shadow-sm">
            <Tabs defaultActiveKey="1" >
                <Tabs.TabPane tab={<span className="fs-6"><AppstoreOutlined/> Card Display</span>} key="1">
                    <CardDisplay/>
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span className="fs-6"><TableOutlined/> Table Display</span>} key="2">
                    <TableDisplay/>
                </Tabs.TabPane>
            </Tabs>
            </Card>
        </Spin>
    )
}

export default UserProduct
