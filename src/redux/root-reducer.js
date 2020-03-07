import { combineReducers } from 'redux';
import { persistReducer} from 'redux-persist';
//importing localStorage persist from redux-persist
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer.js';
import cartReducer from './cart/cart.reducer.js';
import directoryReducer from './directory/directory.reducer.js';
import shopReducer from './shop/shop.reducer.js';



//configuration object for redux-persist use
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
