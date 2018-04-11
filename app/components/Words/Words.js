import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export default class Words extends Component {
    render() {
        const { text = '' } = this.props
        return (
            <Text>{text}</Text>
        )
    }
}