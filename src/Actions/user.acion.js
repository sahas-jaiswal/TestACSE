import { userConstants } from './constants';
import axios from '../Helpers/axios';
export const signout = () => {
    return async dispatch => {

        dispatch({ type: userConstants.LOGOUT_REQUEST });
        const res = await axios.post(`/signout`);

        if (res.status === 200) {
            localStorage.clear();
            dispatch({ type: userConstants.LOGOUT_SUCCESS });
        } else {
            dispatch({
                type: userConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
};