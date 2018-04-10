import React, { Component } from 'react'
import { Text } from 'react-native'
import { PublicStack } from '../config/routes'
import { Container } from '../components'

export default class Start extends Component {
    /*componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    keyboardDidShow() {
        alert('Keyboard Shown');
    }

    keyboardDidHide() {
        alert('Keyboard Hidden');
    }*/

    render() {
        return (
            <Container.WithBackground>
                <Container.Public>
                    <PublicStack
                        screenProps={{ rootNavigation: this.props.navigation }} />
                </Container.Public>
            </Container.WithBackground>
        )
    }
}