import React, { Component } from 'react'
import Words from './Words'

import styles from './styles'

export default class Title extends Component {
    render() {
        return (
            <Words
                style={styles.title}
                {...this.props} />
        )
    }
}