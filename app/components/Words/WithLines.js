import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export default class WithLines extends Component {
    render() {
        const { text = '' } = this.props
        return (
            <View style={styles.container}>
                <View
                    style={styles.line} />

                <Text
                    style={styles.text}>
                    {text}
                </Text>

                <View
                    style={styles.line} />
            </View>
        )
    }
}