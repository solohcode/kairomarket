/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'

// to section importations 
import Top from '../../components/crumbs/header/top'
import HeadNav from '../../components/crumbs/header'
import { Bottom, Footer } from '../../components/crumbs/footer'
// home content imortations 
import Bread from '../../components/crumbs/breadcrumb/bread'
import Banner from '../../components/layout/home/banner'
import CatSearch from '../../components/layout/home/catsearchsec'
import Featured from '../../components/layout/products/featured'
import SearchProd from '../../components/layout/products/searchprod'
import TopSearch from '../../components/layout/products/topsearch'
import { connect } from 'react-redux'


const mapStateToProps = ({dispatch, product, cart})=>({
    dispatch,
    homeProducts: product.homeProducts,
    loading: product.loading,
    searchLoading: product.searchLoading,
    searchResult: product.searchResult,
    cart: cart.cart
})
function Home({dispatch, homeProducts, loading, searchLoading, searchResult, cart}) {


    useEffect(() => {
        dispatch({
            type: 'product/HOME_PRODUCT'
        })
    }, [])

    const moreDetails = (no,sh,ad)=>(
        <div className="w-100 mx-auto bg-light p-3">
            <p className="fs-5 text-center">Get To The Seller</p>
            <p>Social Handle: <b><a target="_blank" rel="noreferrer" href={`https://wa.me/+234${sh}`} className="fab fa-whatsapp text-secondary fs-5"/></b></p>
            <p>Contact: <b><a href={`tel:+234${no}`} className="fas fa-phone text-secondary fs-5"/></b></p>
            <p className="w-100">Address: <address>{ad || 'not available'}</address></p>
            
        </div>
    )

    const AddToCart =(product)=>{
        const prod = {
            e: product,
            cart
        }
        dispatch({
            type: 'cart/ADD_TO_CART',
            payload: prod
        })
    }
    return (
        <div>
            <Top cart={cart}/>
            <HeadNav cart={cart.length} dispatch={dispatch} loading={searchLoading} />
            <Bread/>
            <CatSearch addToCart={AddToCart} dispatch={dispatch} searchResult={searchResult} moreDetails={moreDetails} />
            <SearchProd addToCart={AddToCart} searchResult={searchResult} moreDetails={moreDetails} dispatch={dispatch} searchLoading={searchLoading} />
            <Featured addToCart={AddToCart} products={homeProducts} loading={loading} moreDetails={moreDetails} />
            <Banner/>
            <TopSearch addToCart={AddToCart} products={homeProducts} loading={loading} moreDetails={moreDetails} />
            <Footer/>
            <Bottom/>
        </div>
    )
}


export default connect(mapStateToProps)(Home)