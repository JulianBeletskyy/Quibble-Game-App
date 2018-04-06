import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Logo, DAButton } from 'app/components/'

export default class Home extends React.Component {
    onPressPlay = (e) => {
        console.log('Play')
        this.props.screenProps.rootNavigation.navigate('GameScreen')
    }

    onPressAbout = (e) => {
        console.log('About')
    }

    onPressLogin = (e) => {
        console.log('Login')
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <DAButton
                    text='Играть'
                    onPress={this.onPressPlay} />
                <DAButton
                    text='О приложении'
                    onPress={this.onPressAbout}
                    type='default' />
                <DAButton
                    text='Войти'
                    onPress={this.onPressLogin}
                    type='default' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});
