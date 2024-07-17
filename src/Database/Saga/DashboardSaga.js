import { put, takeEvery } from "redux-saga/effects"
import axios from "axios"
import { toast } from "react-hot-toast"
import { GET_ALL_CATEGORY, GET_FILTER_PRODUCT, GET_SORT_VALUE, MY_API_ERROR, SET_FILTER_PRODUCT, SET_LOADER, SET_SORT_VALUE } from "../Constant"

function* getAllCategory() {
    try {
        yield put({ type: SET_LOADER, payload: true })
        let response = yield axios.get("https://jsonplaceholder.typicode.com/comments");
        if (response.status === 200) {
            yield put({ type: SET_LOADER, payload: false })
        }
    } catch (error) {
        yield put({ type: MY_API_ERROR, payload: false })
        console.log("error is   ", error)
        toast.error(error?.response?.data?.message || error.message)
    }
}

function* getSortProduct(action) {
    try {
        let newSortData;
        const sortingProduct = (a, b) => {

            if (action.payload.title === "b") {
                return a.name.localeCompare(b.name);
            }

            if (action.payload.title === "c") {
                return b.name.localeCompare(a.name);

            }

            if (action.payload.title === "d") {
                return a.price - b.price;
            }

            if (action.payload.title === "e") {
                return b.price - a.price;
            }
        };
        if (action.payload.title === "a") {
            yield put({ type: SET_SORT_VALUE, payload: action.payload.productList })
        } else {
            newSortData = action.payload.productList.sort(sortingProduct);
            yield put({ type: SET_SORT_VALUE, payload: newSortData })
        }
    } catch (error) {
        yield put({ type: MY_API_ERROR, payload: false })
        console.log(error)
    }
}

function* getFilterProduct(action) {
    try {
        const title = action.data.title;
        let tempFilterProduct = action.data.productList;
        if (title === "sub-category") {
            tempFilterProduct = tempFilterProduct.filter((currElem) =>
                currElem.subCategory === action.data.name
            );
        }

        if (title === 'clear_all') {
            tempFilterProduct = [...tempFilterProduct]
        }

        if (title === 'priceRange') {
            tempFilterProduct = tempFilterProduct.filter((currElem) =>
                parseInt(currElem.special_price) > action.data.minPrice && parseInt(currElem.special_price) <= action.data.maxPrice
            );
        }

        yield put({ type: SET_FILTER_PRODUCT, payload: tempFilterProduct })

    } catch (error) {
        yield put({ type: MY_API_ERROR, payload: false })
        console.log(error)
    }
}


function* DashboardSaga() {
    yield takeEvery(GET_ALL_CATEGORY, getAllCategory)
    yield takeEvery(GET_SORT_VALUE, getSortProduct)
    yield takeEvery(GET_FILTER_PRODUCT, getFilterProduct)
}

export default DashboardSaga