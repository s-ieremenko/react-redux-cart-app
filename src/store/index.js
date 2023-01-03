import { createStore } from 'redux'

import reducer from '../reducer'
import cartItems from '../cartItems'

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0,
}
const store = createStore(
    reducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
