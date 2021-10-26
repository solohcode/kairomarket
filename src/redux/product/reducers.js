import actions from "./actions"


const initialState = {
    searchLoading: false,
    searchResult: [],
    loading: false,
    homeProducts: [],
    userProducts: [],
    productCategory: [],
    // prodCategory: []
}



export default function productReducer( state = initialState, action ){
    switch (action.type) {
        case actions.SET_STATE:
          return { ...state, ...action.payload }
        default:
          return state
      }
}