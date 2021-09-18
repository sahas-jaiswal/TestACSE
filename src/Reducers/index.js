import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import productReducer from './product.reducer';
const rootReducer = combineReducers({
    user:userReducer,
    product:productReducer,
});
export default rootReducer;