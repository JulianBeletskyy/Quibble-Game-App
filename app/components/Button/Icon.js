import React, { Component } from "react"
import { TouchableOpacity, Platform } from "react-native"
import { Ionicons } from '@expo/vector-icons';

import styles from './styles'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'

export default class Icon extends Component {
    render() {
        const {
            icon = "",
            size = 30,
            color = styles.$whiteColor,
            onPress = null,
            onLongPress = null,
        } = this.props

        return (
            <TouchableOpacity
                style={[styles.icon]}
                onPress={onPress}
                onLongPress={onLongPress}>
                <Ionicons name={`${ICON_PREFIX}-${icon}`} size={size} color={color} />
            </TouchableOpacity>
        )
    }
}