import { GET_ALL_CATEGORY, GET_ALL_PRODUCT, GET_ALL_SUB_CATEGORY, GET_FILTER_PRODUCT, GET_PRODUCT_VIA_PAGINATION, GET_SORT_VALUE, OPEN_IMAGE_SHOW_MODAL, SET_LOADER, SET_TAB_HEADER_STATE, SET_TAB_SPECIAL_PRODUCT_STATE } from "../Constant"

export const setLoader = (item) => {
    return {
        type: SET_LOADER,
        payload: item
    }
}

export const getAllCategory = () => {
    return {
        type: GET_ALL_CATEGORY
    }
}

export const getAllSubCategory = () => {
    return {
        type: GET_ALL_SUB_CATEGORY
    }
}

export const getAllProduct = () => {
    return {
        type: GET_ALL_PRODUCT
    }
}

export const openImageModal = (item) => {
    return {
        type: OPEN_IMAGE_SHOW_MODAL,
        payload: item
    }
}

export const setTabHeaderState = (item) => {
    return {
        type: SET_TAB_HEADER_STATE,
        payload: item
    }
}

export const setTabSpeProductState = (item) => {
    return {
        type: SET_TAB_SPECIAL_PRODUCT_STATE,
        payload: item
    }
}

export const setProductViaPagination = (item) => {
    return {
        type: GET_PRODUCT_VIA_PAGINATION,
        payload: item
    }
}

export const sortProduct = (item) => {
    return {
        type: GET_SORT_VALUE,
        payload: item
    }
}

export const productFilter = (item) => {
    return {
        type: GET_FILTER_PRODUCT,
        data: item
    }
}