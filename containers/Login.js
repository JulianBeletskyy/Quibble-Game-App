import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Logo, DAButton, DAText } from '../components'

export default class Login extends React.Component {
    onPressLogin = (e) => {
        console.log('Login')
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <DAText
                    placeholder='Email'
                    focus={true} />

                <DAText
                    placeholder='Пароль'
                    type='password' />

                <DAButton
                    text='Войти'
                    onPress={this.onPressLogin} />
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
