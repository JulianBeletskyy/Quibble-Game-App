import React from 'react'
import { View, TextInput, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import styles from './styles'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'

export default class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: (this.props.value || '')
        }
    }

    onChangeText = (value) => {
        this.setState({ value })
        if (this.props.onChangeText) {
            this.props.onChangeText(value)
        }
    }

    render() {
        const {
            inputRef = null,
            onSubmit = null,
            placeholder = '',
            style = {},
            type = 'text',
            icon = null,
            returnKeyType = 'done',
        } = this.props

        return (
            <View style={styles.container}>
                {
                    icon
                    ? <View style={styles.icon}><Ionicons name={`${ICON_PREFIX}-${icon}`} size={30} color={styles.$placeholder} /></View>
                    : null
                }
                <TextInput
                    ref={inputRef}
                    onSubmitEditing={onSubmit}
                    style={[styles.input, style]}
                    placeholder={placeholder}
                    placeholderTextColor={styles.$placeholder}
                    underlineColorAndroid='transparent'
                    secureTextEntry={type == 'password'}
                    blurOnSubmit={false}
                    returnKeyType={returnKeyType}
                    value={this.state.value}
                    onChangeText={this.onChangeText} />
            </View>
        )
    }
}