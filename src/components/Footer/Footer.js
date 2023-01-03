import React from 'react'

import { connect } from 'react-redux'
import styles from './Footer.module.css'
import { CLEAR_CART } from '../../actions'

const Footer = ({ total, dispatch }) => {
    return (
        <footer>
            <div className={styles.totalContainer}>
                <p>Total</p>
                <p>{total}</p>
            </div>
            <button onClick={() => dispatch({ type: CLEAR_CART })}>
                Clear all
            </button>
        </footer>
    )
}
const mapStateToProps = (store) => {
    return {
        total: store.total,
    }
}
export default connect(mapStateToProps)(Footer)
