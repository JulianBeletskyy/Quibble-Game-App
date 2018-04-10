import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Background } from "../../components"

import styles from './styles'

export default class Container extends Component {
    render () {
        const { withBackground = false } = this.props
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    {
                        withBackground
                        ? <Background />
                        : null
                    }

                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}