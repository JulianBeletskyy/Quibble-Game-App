import React, { Component } from "react"
import { TouchableHighlight, Text } from "react-native"
import Color from "color"

import styles from './styles'

export default class Button extends Component {
    render() {
        const {
            text = "",
            btnStyle = {},
            textStyle = {},
            type = "default",
            onPress = null,
            onLongPress = null,
        } = this.props

        let style = styles.btnDefault
        let underlayColor = styles.$black
        if (type === 'primary') {
            style = styles.btnPrimary
            underlayColor = Color(styles.$primaryColor).darken(0.5).string()
        }
        return (
            <TouchableHighlight
                style={[styles.btn, style, btnStyle]}
                onPress={onPress}
                onLongPress={onLongPress}
                underlayColor={underlayColor}>
                <Text style={[styles.text, textStyle]}>
                    {text.toUpperCase()}
                </Text>
          </TouchableHighlight>
        )
    }
}