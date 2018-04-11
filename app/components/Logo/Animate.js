import React, { Component } from 'react'
import { Animated, Keyboard, Platform } from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 250

export default class Animate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logoWidth: new Animated.Value(styles.$logoWidth),
            logoHeight: new Animated.Value(styles.$logoHeight),
        }
    }

    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardWillShow,
        )

        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyboardWillHide,
        )
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    keyboardWillShow = () => {
        Animated.parallel([
            Animated.timing(this.state.logoWidth, {
                toValue: styles.$logoSmallWidth,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.state.logoHeight, {
                toValue: styles.$logoSmallHeight,
                duration: ANIMATION_DURATION,
            }),
        ]).start()
    }

    keyboardWillHide = () => {
        Animated.parallel([
            Animated.timing(this.state.logoWidth, {
                toValue: styles.$logoWidth,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.state.logoHeight, {
                toValue: styles.$logoHeight,
                duration: ANIMATION_DURATION,
            }),
        ]).start()
    }

    render() {
        const style = [
            styles.logo,
            {
                width: this.state.logoWidth,
                height: this.state.logoHeight,
            }
        ]

        return (
            <Animated.Image
                style={style}
                source={require('../../assets/logo.png')}
                resizeMode="contain" />
        )
    }
}