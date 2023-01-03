import {
    CLEAR_CART,
    GET_TOTALS,
    REMOVE,
    TOGGLE_AMOUNT,
} from './actions'

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] }
    }

    if (action.type === TOGGLE_AMOUNT) {
        const tempCart = state.cart.map((product) => {
            if (action.payload.id === product.id) {
                if (action.payload.typeOfAction === 'inc') {
                    return { ...product, amount: product.amount + 1 }
                } else if (action.payload.typeOfAction === 'dec') {
                    return { ...product, amount: product.amount - 1 }
                }
            }
            return product
        })
        return { ...state, cart: tempCart }
    }

    if (action.type === REMOVE) {
        return {
            ...state,
            cart: state.cart.filter(
                (product) => action.payload.id !== product.id
            ),
        }
    }
    if (action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { amount, price } = cartItem
                cartTotal.amount += amount
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                return cartTotal
            },
            { total: 0, amount: 0 }
        )
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }
    return state
}

// if (action.type === INCREASE) {
//     let tempCart = state.cart.map((product) => {
//         if (action.payload.id === product.id) {
//             return { ...product, amount: product.amount + 1 }
//         }
//         return product
//     })
//
//     return { ...state, cart: tempCart }
// }
//
// if (action.type === DECREASE) {
//     let tempCart = state.cart.map((product) => {
//         if (action.payload.id === product.id) {
//             return {
//                 ...product,
//                 amount: product.amount - 1,
//             }
//         }
//         return cartItem
//     })

//     return { ...state, cart: tempCart }
// }
export default reducer
