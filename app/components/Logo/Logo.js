import React, { Component } from 'react'
import { Image } from 'react-native'

import styles from './styles'

export default class Logo extends Component {
    render() {
        return (
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
                resizeMode="contain" />
        )
    }
}