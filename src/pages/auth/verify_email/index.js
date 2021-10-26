import { VerifiedOutlined } from '@ant-design/icons'
import { Button, Card, Form, } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import HeadNav from '../../../components/crumbs/header'
import Top from '../../../components/crumbs/header/top'





const mapStateToProps = ({dispatch, user})=>({
    dispatch,
    loading: user.loading
   })
function Verify(props) {
    const {loading, dispatch, match} = props


    const handleSubmit =()=>{
        const id = match && match.params.id
        dispatch({
            type:'user/VERIFY_EMAIL',
            payload: id
        })
    }
    return (
        <div>
            <Top/>
            <HeadNav auPage={true} />
        <div className="py-3 py-md-5">
            <div className="container-lg">
                <Card className="container-lg px-md-5 rounded-3">
                    <div className="text-secondary text-center py-4">
                        <h5 className="d-inline mx-3">Click to verify email</h5>
                    </div>

                    <Form className="px-md-5">
                        <Form.Item className="w-50 mx-auto">
                            <Button onClick={handleSubmit} icon={<VerifiedOutlined />} loading={loading} htmlType="submit" type="primary" size="large" block>Verify email</Button>
                        </Form.Item>
                    </Form>

                    
                </Card>
            </div>
        </div>
        </div>
    )
}


export default connect(mapStateToProps)(Verify)