import { productConstants } from "../Actions/constants";

const initState = {
    token: null,
    products:[],
    product: {
        id:'',
        name: '',
        price: '',
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: '',
    message: '',
};

export default (state = initState, action) => {

    console.log(action);

    switch (action.type) {
        case productConstants.PRODUCT_CREATE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.PRODUCT_CREATE_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case productConstants.PRODUCT_CREATE_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
                message: action.payload.message
            }
            break;
        case productConstants.PRODUCT_UPDATE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.PRODUCT_UPDATE_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message,
            }
            break;
        case productConstants.PRODUCT_UPDATE_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
                message: action.payload.message,
            }
            break;
            case productConstants.PRODUCT_GET_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            case productConstants.PRODUCT_GET_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    products: action.payload.products,
                   
                }
                break;
            case productConstants.PRODUCT_GET_FAIUTRE:
                state = {
                    ...state,
                    loading: false,
                    error: action.payload.error,
                    message: action.payload.message
                }
                break;  
                case productConstants.PRODUCT_DELETE_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            case productConstants.PRODUCT_DELETE_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                   message:action.payload.error,
                   error: action.payload.error,
                }
                break;
            case productConstants.PRODUCT_DELETE_FAILURE:
                state = {
                    ...state,
                    loading: false,
                    error: action.payload.error,
                    message: action.payload.message
                }
                break;  
    }

    return state;
}