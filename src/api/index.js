import store from "store";
import apiClient from "./utils/apiClient";



// authentification api section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// login api 
export const LoginApi = async (payload)=>{
    return await apiClient
    .post('/auth/login', payload )
    .then(response =>{
        const {data, status} = response
        if(status){
            store.set('login-data', data)
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// register api 
export const RegisterApi = async (payload)=>{
    return await apiClient
    .post('/auth/register', payload )
    .then(response =>{
        const {data, status} = response
        if(status){
            store.set('register-data', data)
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// forgot password api 
export const RecoverApi = async (payload)=>{
    return await apiClient
    .post('/auth/forgot_password', payload )
    .then(response =>{
        const {data, status} = response
        if(status){
            store.set('register-data', data)
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// reset password api 
export const ResetApi = async (payload)=>{
    return await apiClient
    .post('/auth/reset_password', payload )
    .then(response =>{
        const {data, status} = response
        if(status){
            store.set('register-data', data)
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// verify password api 
export const VerifyApi = async (id)=>{
    return await apiClient
    .get(`/auth/verify_email/${id}`)
    .then(response =>{
        const {data, status} = response
        if(status){
            store.set('register-data', data)
        }
        return response
    })
    .catch(err =>{
        return err
    })
}





// home page product api section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// home random product display api 
export const HomeProduct =async ()=>{
    return await apiClient
    .get('/display_products')
    .then(response =>{
        const {status} = response
        if(status){
            return response
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// search product api 
export const SearchProduct =async (params)=>{
    return await apiClient
    .post('/search_products', params)
    .then(response =>{
        const {status} = response
        if(status){
            return response
        }
        return response
    })
    .catch(err =>{
        return err
    })
}







// user interaction api section  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// user profile api
export const ProfileApi = async ()=>{
    return await apiClient
    .get('/fetch_profile?token=')
    .then(response =>{
        const {status} = response
        if(status){
            return response
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// user profile update api
export const UpdateProfileApi = async (params)=>{
    return await apiClient
    .post('/update_profile?token=', params)
    .then(response =>{
        const {status} = response
        if(status){
            return response
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// user product api
export const UserProductApi = async ()=>{
    return await apiClient
    .get('/view_products?token=')
    .then(response =>{
        const {status} = response
        if(status){
            return response
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// user product category api
export const UserCategoryApi = async ()=>{
    return await apiClient
    .get('/fetch_categories?token=')
    .then(response =>{
        const {status} = response
        if(status){
            return response
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// user upload product api
export const UploadProductApi = async (params)=>{
    return await apiClient
    .post('/add_products?token=', params)
    .then(response =>{
        const {status} = response
        if(status){
            return response
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

// user delete product api
export const DeleteProductApi = async (id)=>{
    return await apiClient
    .get(`/delete_product/${id}?token=`)
    .then(response =>{
        const {status} = response
        if(status){
            return response
        }
        return response
    })
    .catch(err =>{
        return err
    })
}

