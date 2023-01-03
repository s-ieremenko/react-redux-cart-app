import React, { useEffect } from 'react'

import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'
import { connect } from 'react-redux'
import { GET_TOTALS } from '../../actions'

const CartContainer = ({ cart = [], dispatch }) => {
    useEffect(() => {
        dispatch({ type: GET_TOTALS })
    }, [cart, dispatch])

    return (
        <section className="appContainer">
            <header>
                <h2>Your bag</h2>
            </header>

            {cart.length ? (
                cart.map((product) => {
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                        />
                    )
                })
            ) : (
                <div>Your bag is empty</div>
            )}

            <Footer />
        </section>
    )
}
const mapStateToProps = (store) => {
    const { cart } = store
    return { cart }
}
export default connect(mapStateToProps)(CartContainer)
