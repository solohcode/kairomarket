import { UploadOutlined } from '@ant-design/icons'
import { Button, Card, Spin, Form, Input,Select, Empty } from 'antd'
import React, { useState } from 'react'


function UserAddProduct({dispatch, loading, category}) {
    const [pImg, setPImg] = useState({})
    const handleImg =(e)=>{
        const {files} = e.target
        setPImg(files[0])
    }


    const handleSubmit=(value)=>{
        const {product_name,description,price,category} = value
        const data = new FormData()
        data.append('product_image[0]', pImg)
        data.append('product_name[0]', product_name)
        data.append('description[0]', description)
        data.append('price[0]', price)
        data.append('category[0]', category)

        dispatch({
            type: 'product/USER_ADD_PRODUCT',
            payload: data
        })
    }

    return (
        <Spin spinning={false} size="large">
            <Card className="mt-lg-3 py-md-5 px-0 shadow-sm" style={{height:'inherit'}}>
                <div className="w-100">
                    <div className="fs-5">
                        <p>Upload New Product</p>
                    </div>
                    <Form className="row" 
                        onFinish={handleSubmit}>
                        <div className="col-12 col-md-4 text-center py-lg-5">
                            <Form.Item name='product_image' className=" w-50 mx-auto" label="Choose Product Image">
                                <input onChange={handleImg} className="form-control form-control-sm" id="formFileSm" type="file"/>
                            </Form.Item>
                        </div>
                        <div className="col-md-8 d-md-flex">
                            <div class="list-group list-group-flush m-0 w-100">
                                <li className="list-group-item bg-light text-secondary fw-bold">Product Name</li>
                                <Form.Item className="list-group-item my-0" name='product_name'>
                                    <Input placeholder="product name" size="large" />
                                </Form.Item>
                                <li className="list-group-item bg-light text-secondary fw-bold">Description</li>
                                <Form.Item className="list-group-item my-0" name='description'>
                                    <Input.TextArea allowClear placeholder="description" size="large" />
                                </Form.Item>
                            </div>
                            <div class="list-group list-group-flush m-0 w-100">
                                <li className="list-group-item bg-light text-secondary fw-bold">Price</li>
                                <Form.Item className="list-group-item my-0" name='price'>
                                    <Input placeholder="price" size="large" />
                                </Form.Item>
                                <li className="list-group-item bg-light text-secondary fw-bold">Category</li>
                                <Form.Item className="list-group-item my-0" name='category'>
                                    <Select
                                        allowClear
                                        size="large"
                                        showSearch
                                        loading={loading}
                                        className="w-100"
                                        placeholder="Select category"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                    {
                                    !category.length? <Empty/>:
                                    category && category.map((props, index)=>(
                                        <Select.Option key={index} value={props.id} >{props.category_name}</Select.Option>
                                    ))
                                    }
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>

                        <div className="col-12 mt-5 text-center">
                            <Button loading={loading} htmlType="submit" type="primary" size="large" className="w-75 mx-auto" icon={<UploadOutlined/>}> Upload product </Button>
                        </div>
                    </Form>
                </div>
            </Card>
        </Spin>
    )
}

export default UserAddProduct
