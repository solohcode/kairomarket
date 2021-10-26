import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { message } from "antd";
import { history } from "../..";
import * as apis from "../../api";
import actions from "./actions";


const api = {
    home_products: apis.HomeProduct,
    search_products: apis.SearchProduct,
    user_products: apis.UserProductApi,
    product_category: apis.UserCategoryApi,
    add_product: apis.UploadProductApi,
    delete_product: apis.DeleteProductApi
}


// home product display saga >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function* HOME_PRODUCTS(){

    yield put({
        type: 'product/SET_STATE',
        payload: {
            loading: true,
        }
    })
    const success = yield call(api.home_products)
    if(success.status){
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
                homeProducts: success.data
            }
        })
        message.success({
            content: `${success.data.length} Products Loaded Successfully`,
            style: {
                marginTop:'10vh'
            }
        })
    }else{
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
            }
        })
        message.error({
            content: 'Products Failed to Load, Please Check Internet Connection',
            style: {
                marginTop:'10vh'
            }
        })
    }
} 




// home search product display saga >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function* SEARCH_PRODUCTS({payload}){
    yield put({
        type: 'product/SET_STATE',
        payload: {
            searchLoading: true,
        }
    })
    const success = yield call(api.search_products, payload)
    const {data, status} = success
    if(status){
        if( Array.isArray(data)){
            yield put({
                type:'product/SET_STATE',
                payload: {
                    searchLoading: false,
                    searchResult: data
                }
            });
            message.success({
                content: 'Search Results Loaded Successfully',
                style: {
                    marginTop:'10vh'
                }
            })
        }else{
            yield put({
                type:'product/SET_STATE',
                payload: {
                    searchLoading: false,
                    searchResult: []
                }
            });
            message.warning({
                    content: `${data.message}, no such product`,
                    style: {
                            marginTop:'10vh'
                        }
                    })
                }
    }else{
        yield put({
            type:'product/SET_STATE',
            payload: {
                searchLoading: false,
            }
        })
        message.error({
            content: 'Products Failed to Load, Please Check Internet Connection',
            style: {
                marginTop:'10vh'
            }
        })
    }
} 





// user product display saga >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function* USER_PRODUCTS(){

    yield put({
        type: 'product/SET_STATE',
        payload: {
            loading: true,
        }
    })
    const success = yield call(api.user_products)
    if(success.status){
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
                userProducts: success.data.data
            }
        })
    }else{
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
            }
        })
        message.error({
            content: `Products Failed to Load, ${success.data.message}`,
            style: {
                marginTop:'10vh'
            }
        })
    }
}


// user product category saga >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function* USER_PRODUCT_CATEGORY(){

    yield put({
        type: 'product/SET_STATE',
        payload: {
            loading: true,
        }
    })
    const success = yield call(api.product_category)
    if(success.status){
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
                productCategory: success.data
            }
        })
    }else{
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
            }
        })
        message.error({
            content: `Product Category Failed to Load, ${success.data.message}`,
            style: {
                marginTop:'10vh'
            }
        })
    }
}



// user add product saga >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function* USER_ADD_PRODUCT({payload}){

    yield put({
        type: 'product/SET_STATE',
        payload: {
            loading: true,
        }
    })
    const success = yield call(api.add_product, payload)
    if(success.status && success.data.status){
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
            }
        })
        message.success({
            content: success.data.message,
            duration: 5,
            style: {
                marginTop:'10vh'
            }
        })
        yield history.push('/user/products')
    }else{
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
            }
        })
        message.error({
            content: `Product Failed to Upload, ${success.data.message}`,
            duration: 5,
            style: {
                marginTop:'10vh'
            }
        })
    }
}




// user delete product saga >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function* USER_DELETE_PRODUCT({payload}){

    yield put({
        type: 'product/SET_STATE',
        payload: {
            loading: true,
        }
    })
    const success = yield call(api.delete_product, payload)
    if(success.status && success.data.status){
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
            }
        })
        message.success({
            content: success.data.message,
            duration: 5,
            style: {
                marginTop:'10vh'
            }
        })
        yield history.push('/user/products')
    }else{
        yield put({
            type:'product/SET_STATE',
            payload: {
                loading: false,
            }
        })
        message.error({
            content: `Product Failed to Delete, ${success.data.message}`,
            duration: 5,
            style: {
                marginTop:'10vh'
            }
        })
    }
}







export default function* rootSaga(){
    yield all([
        takeEvery(actions.HOME_PRODUCT, HOME_PRODUCTS),
        takeEvery(actions.SEARCH_PRODUCT, SEARCH_PRODUCTS),
        takeEvery(actions.USER_PRODUCT, USER_PRODUCTS),
        takeEvery(actions.USER_PRODUCT_CATEGORY, USER_PRODUCT_CATEGORY),
        takeEvery(actions.USER_ADD_PRODUCT, USER_ADD_PRODUCT),
        takeEvery(actions.USER_DELETE_PRODUCT, USER_DELETE_PRODUCT),
    ])
}