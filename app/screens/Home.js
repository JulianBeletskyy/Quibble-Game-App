import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from '../components'

export default class Home extends Component {
    onPressPlay = (e) => {
        console.log('Play')
        this.props.screenProps.rootNavigation.navigate('Game')
    }

    onPressAbout = (e) => {
        console.log('About')
    }

    onPressLogin = (e) => {
        console.log('Login')
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View>
                <Button.Primary
                    text='Играть'
                    onPress={this.onPressPlay} />
                <Button
                    text='О приложении'
                    onPress={this.onPressAbout}
                    type='default' />
                <Button
                    text='Войти'
                    onPress={this.onPressLogin}
                    type='default' />
            </View>
        );
    }
}