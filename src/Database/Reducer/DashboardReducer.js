import { GET_ALL_SUB_CATEGORY, GET_PRODUCT_VIA_PAGINATION, GET_SORT_VALUE, MY_API_ERROR, OPEN_IMAGE_SHOW_MODAL, SET_ALL_CATEGORY, SET_FILTER_PRODUCT, SET_LOADER, SET_SORT_VALUE, SET_TAB_HEADER_STATE, SET_TAB_SPECIAL_PRODUCT_STATE } from "../Constant";

const initialState = {
    loader: false,
    allProducts: [],
    allCategory: [],
    allSubCategory: [],
    imageModal: false,
    tabHeaderState: 1,
    tabSpeProductState: 1,
    productViaPagination: [],
    filterProduct: []
}
const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADER:
            return {
                ...state,
                loader: action.payload
            }
        case MY_API_ERROR:
            return {
                ...state,
                loader: false
            }
        case SET_ALL_CATEGORY:
            return {
                ...state,
                allCategory: action.payload
            }
        case OPEN_IMAGE_SHOW_MODAL:
            return {
                ...state,
                imageModal: action.payload
            }

        case SET_TAB_HEADER_STATE:
            return {
                ...state,
                tabHeaderState: action.payload
            }

        case SET_TAB_SPECIAL_PRODUCT_STATE:
            return {
                ...state,
                tabSpeProductState: action.payload
            }
        case GET_PRODUCT_VIA_PAGINATION:
            return {
                ...state,
                productViaPagination: action.payload,
                filterProduct: action.payload
            }

        case SET_SORT_VALUE:
            return {
                ...state,
                filterProduct: action.payload
            };

        case SET_FILTER_PRODUCT:
            return {
                ...state,
                filterProduct: action.payload
            };


        default:
            return state;
    }
}

export default DashboardReducer