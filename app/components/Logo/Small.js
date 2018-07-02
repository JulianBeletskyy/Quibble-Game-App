import React, { Component } from 'react'
import Logo from './Logo'

import styles from './styles'

export default class Small extends Component {
    render() {
        return (
            <Logo
                style={styles.logoSmall} />
        )
    }
}