import { userConstants } from "../Actions/constants";

const initState = {
    authenticate: false,
    authenticating: false,
    loading: false,
    error: '',
    message: '',
};

export default (state = initState, action) => {

    console.log(action);

    switch (action.type) {
            case userConstants.LOGOUT_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            case userConstants.LOGOUT_SUCCESS:
                state = {
                    ...initState
                }
                break;
            case userConstants.LOGOUT_FAILURE:
                state = {
                    ...state,
                    error: action.payload.error,
                    loading: false,
                }
                break;

    }

    return state;
}