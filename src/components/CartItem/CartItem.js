import React from 'react'
import { connect } from 'react-redux'

import styles from './CartItem.module.css'
import { ReactComponent as ArrowUp } from '../../images/up-arrow-svgrepo-com.svg'
import { ReactComponent as ArrowDown } from '../../images/down-arrow-svgrepo-com.svg'
import { REMOVE, TOGGLE_AMOUNT } from '../../actions'

const CartItem = ({ product, remove, toggle }) => {
    const { price, amount, title, img } = product

    return (
        <article className={styles.productContainer}>
            <img src={img} alt={title} />
            <div className={styles.productContent}>
                <h3>{title}</h3>
                <p>${price}</p>
                <button onClick={remove}>remove</button>
            </div>
            <div className={styles.counterContainer}>
                <button onClick={() => toggle('inc')}>
                    <ArrowUp width="30" height="30" />
                </button>
                <p>{amount}</p>
                <button
                    onClick={() => {
                        if (amount === 1) {
                            return remove()
                        } else {
                            return toggle('dec')
                        }
                    }}
                >
                    <ArrowDown width="30" height="30" />
                </button>
            </div>
        </article>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps.product
    return {
        remove: () => dispatch({ type: REMOVE, payload: { id } }),
        toggle: (typeOfAction) =>
            dispatch({
                type: TOGGLE_AMOUNT,
                payload: { id, typeOfAction },
            }),
        // increase: () =>
        //     dispatch({ type: INCREASE, payload: { id, amount } }),
        // decrease: () =>
        //     dispatch({ type: DECREASE, payload: { id, amount } }),
    }
}
export default connect(null, mapDispatchToProps)(CartItem)
