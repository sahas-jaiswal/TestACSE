import { productConstants } from './constants';
import axios from '../Helper/axios';


export const createProduct = (product) => {


    return async (dispatch) => {

        dispatch({ type: productConstants.PRODUCT_CREATE_REQUEST });
        await axios.post(`/create`, {
            ...product
        }).then(res => {
                const { product,message } = res.data;
                dispatch({
                    type: productConstants.PRODUCT_CREATE_SUCCESS,
                    payload: {
                        product,message
                    }
                   
                });
                getAllProducts();
        }).catch(err => {
            dispatch({
                    type: productConstants.PRODUCT_CREATE_FAILURE,
                    payload: { error: err.response.data.error, message: err.response.data.message  }
                });
        })
        
    }
};

export const getAllProducts = () => {
    return async dispatch => {

        dispatch({ type: productConstants.PRODUCT_GET_REQUEST });
        await axios.get(`/getproduct`).then(res => {
            dispatch({
                type: productConstants.PRODUCT_GET_SUCCESS,
                payload: { products: res.data.product , message:res.data.message}
            });
        }).catch(err => {
            dispatch({
                type: productConstants.PRODUCT_GET_FAIUTRE,
                payload:  { error: err.data},
            });
        })
       
    }
};

export const deleteProduct = (id) => {
    console.log(id);
    return async (dispatch) => {
        dispatch({ type: productConstants.PRODUCT_DELETE_REQUEST });
        await axios.delete(`/delete`, {
                data:{ id: id}
        }).then(res => {
                const { message } = res.data;
                dispatch({
                    type: productConstants.PRODUCT_DELETE_SUCCESS,
                    payload: { message: message }
                })
        }).catch(err => {
            dispatch({
                type: productConstants.PRODUCT_DELETE_FAILURE,
                payload: { error: err.response.data.error, message: err.response.data.message }
            })
        })
    }
};

export const updateProduct = (data) => {
   
    return async (dispatch) => {
        dispatch({ type: productConstants.PRODUCT_UPDATE_REQUEST });
        await axios.put('/update', {
                ...data
        }).then(res => {
                const { message } = res.data;
                dispatch({
                    type: productConstants.PRODUCT_UPDATE_SUCCESS,
                    payload: { message: message }
                })
        }).catch(err => {
            dispatch({
                type: productConstants.PRODUCT_UPDATE_FAILURE,
                payload: { error: err.response.data.error, message: err.response.data.message }
            })
        })
    }
};







