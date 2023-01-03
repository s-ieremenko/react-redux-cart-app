import React from 'react'

import { ReactComponent as IconCart } from '../../images/shopping-basket.svg'
import { connect } from 'react-redux'
import styles from './Navbar.module.css'

const Navbar = ({ amount }) => {
    return (
        <nav>
            <div className={`${styles.navCenter} appContainer`}>
                <h1>Smartphones</h1>
                <div className={styles.cartIconContainer}>
                    <IconCart />
                    <div className={styles.amountContainer}>
                        <p>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return { amount: state.amount }
}

export default connect(mapStateToProps)(Navbar)
