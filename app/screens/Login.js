import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Input } from '../components'
import { AlertConnect } from '../components/Alert'

class Login extends Component {
    constructor(props) {
        super(props)

        this.data = {
            email: '',
            password: '',
        }
    }

    handleText = (value, key) => {
        this.data[key] = value
    }

    onPressLogin = (e) => {
        if (this.data.email == '') {
            this.props.alertWithType('error', 'Email is required!', 'Please enter a valid email')
        } else if (this.data.password == '') {
            this.props.alertWithType('error', 'Password is required!', 'Please enter a password for your account')
        } else {
            this.props.alertWithType('success', 'All is good', 'Waiting for server answer')
        }
    }

    render() {
        return (
            <View>
                <Input
                    icon='mail'
                    placeholder='Email'
                    onChangeText={value => this.handleText(value, 'email')}
                    focus={true} />

                <Input.Password
                    icon='lock'
                    onChangeText={value => this.handleText(value, 'password')}
                    placeholder='Пароль' />

                <Button.Primary
                    text='Войти'
                    onPress={this.onPressLogin} />
            </View>
        );
    }
}

export default AlertConnect(Login)