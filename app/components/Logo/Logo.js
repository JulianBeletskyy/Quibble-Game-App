import React, { Component } from 'react'
import { Image } from 'react-native'

import styles from './styles'

export default class Logo extends Component {
    render() {
        const { style } = this.props
        return (
            <Image
                style={[styles.logo, style]}
                source={require('../../assets/logo.png')}
                resizeMode="contain" />
        )
    }
}