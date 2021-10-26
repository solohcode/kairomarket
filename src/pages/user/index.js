/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect } from 'react'
import { Layout, notification, Spin } from 'antd';
import { connect } from 'react-redux';
import SideBar from '../../components/crumbs/sider';
import { history} from '../..';
import store from 'store';

// navigation pages 
import UserDashboard from './dashboard';
import UserProfile from './profile';
import UserEditProfile from './editProfile';
import UserProduct from './product';
import UserAddProduct from './addProduct';
import UserHeader from '../../components/crumbs/header/user';
import NotFound from '../404';



const mapStateToProps = ({dispatch, dashboard, profile, product})=>({
    dispatch,
    dashboardLoading: dashboard.loading,
    profileLoading: profile.loading,
    profileData: profile.profile,
    editLoading: profile.updateLoading,
    userProducts: product.userProducts,
    productLoading: product.loading,
    productCategory: product.productCategory
})
function User(props) {
    const {
        dispatch, 
        profileLoading,
        editLoading,
        profileData, 
        userProducts,
        productLoading,
        productCategory,
        match, 
    } = props
    const page = match.params.page
    const loginData = store.get('login-data')
    // check if user is logged in >>>>>>>>>>>>>>>>>>
    const loggedIn = ()=>{
    return ( 
        loginData? 
        true:[
        history.push('/auth/login'),
        notification.warning({
            message: 'User Not Logged In',
            description: 'Please Login To Access The Page.',
            style:{
                marginTop: '10vh'
              }
        })
        ])
    }
    // logout function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const logout = ()=>{
        dispatch({
            type: 'user/LOGOUT'
        })
    }

    useEffect(() => {
        dispatch({
            type: 'profile/PROFILE'
        })
        dispatch({
            type: 'product/USER_PRODUCT'
        })
        dispatch({
            type: 'product/USER_PRODUCT_CATEGORY'
        })
        loggedIn()
        }, [])
    
    const DisplayedPage = ()=> (
        page === 'dashboard'?
        <UserDashboard loading={productLoading} product={userProducts} />:
        page === 'profile'?
        <UserProfile data={profileData}/>:
        page === 'products'?
        <UserProduct dispatch={dispatch} products={userProducts? userProducts: []}/>:
        page === 'edit_profile'?
        <UserEditProfile data={profileData} dispatch={dispatch} loading={editLoading}/>:
        page === 'add_product'?
        <UserAddProduct dispatch={dispatch} category={productCategory} loading={productLoading} />:
        <NotFound/>
        )
    return (
        <Spin spinning={profileLoading} size="large" style={{height:'100vh'}}>
            <Layout>
                <SideBar defaultPage={page} data={profileData} />
                <Layout className="site-layout" style={{ marginLeft: 'auto' }}>
                    <UserHeader spin={editLoading} logout={logout} prod={userProducts && userProducts.length} update={profileData && profileData.profile_pics} bread={page}/>
                    <Layout.Content className="bg-white" style={{ overflow: 'initial' }}>
                        <DisplayedPage/>
                    </Layout.Content>
                    <Layout.Footer className="text-center">Copyright 2021 @Kairomarket</Layout.Footer>
                </Layout>
            </Layout>
        </Spin>
    )
}

export default connect(mapStateToProps)(User)
