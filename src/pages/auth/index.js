import { UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Bottom, Footer } from '../../components/crumbs/footer'
import HeadNav from '../../components/crumbs/header'
import Top from '../../components/crumbs/header/top'
import NotFound from '../404'
import Login from './login'
import Recover from './recover_password'
import Register from './register'


const mapStateToProps = ({dispatch, user})=>({
 dispatch,
 loading: user.loading
})
function Auth(props) {
    const {dispatch, loading} = props
    const path = props.match.params.page

    return (
        <div className="bg-light">
            <Top/>
            <HeadNav auPage={true} />
            <div className="text-center mt-5 fs-5 fw-normal">
                <span className="px-3 btn-link"><Link to="/auth/login" className={path==='login'?'':'text-secondary'}><UserOutlined/> Login</Link></span>
                <Divider type="vertical" style={{backgroundColor:'black', height:'30px'}} />
                <span className="px-3 btn-link"><Link to="/auth/register" className={path==='register'?'':'text-secondary'}><UserAddOutlined/> Register</Link></span>
            </div>
            {
                path && path === 'login'?
                <Login loading={loading} dispatch={dispatch}/>:
                path && path === 'register'?
                <Register loading={loading} dispatch={dispatch}/>:
                path && path === 'recover_password'?
                <Recover loading={loading} dispatch={dispatch}/>:
                <NotFound/>
            }
            <Footer/>
            <Bottom/>
        </div>
    )
}

export default connect(mapStateToProps)(Auth)
