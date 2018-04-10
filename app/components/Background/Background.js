import React, { Component } from 'react'
import { Image } from 'react-native'

import styles from './styles'

export default class Background extends Component {
    render() {
        const { bgImage = require('../../assets/background.jpg') } = this.props
        return (
            <Image
                style={styles.background}
                source={bgImage} />
        )
    }
}