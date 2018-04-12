import React, { Component } from 'react'
import { View, Keyboard } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { Container, Button, Input, Words } from '../components'

class Login extends Component {
    constructor(props) {
        super(props)

        this.data = {
            email: '',
            password: '',
        }

        this.inputs = {
            email: null,
            password: null,
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.users.token && newProps.users.token != this.props.users.token) {
            if (newProps.screens.current == 'Login') {
                Keyboard.dismiss()
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })],
                })
                newProps.navigation.dispatch(resetAction)
            }
        }
    }

    handleText = (value, key) => {
        this.data[key] = value
    }

    onPressLogin = (e) => {
        if (this.data.email == '') {
            this.props.message({
                'title': 'Email is required!',
                'body': 'Please enter a valid email',
                'type': 'error',
            })
        } else if (this.data.password == '') {
            this.props.message({
                'title': 'Password is required!',
                'body': 'Please enter a password for your account',
                'type': 'error',
            })
        } else {
            this.props.loaderShow()
            this.props.login(this.data)
        }
    }

    onPressRegister = (e) => {
        this.props.navigation.navigate('Register')
    }

    focusNext = (index) => {
        if (this.inputs[index]) {
            this.inputs[index].focus()
        }
    }

    render() {
        return (
            <Container.WithBackground>
                <Container.Public
                    onBack={() => { this.props.navigation.goBack() }}>
                    <Input
                        icon='mail'
                        placeholder='Email'
                        inputRef={input => { this.inputs.email = input }}
                        onSubmit={() => this.focusNext('password')}
                        returnKeyType="next"
                        keyboardType="email-address"
                        onChangeText={value => this.handleText(value, 'email')} />

                    <Input.Password
                        icon='lock'
                        inputRef={input => { this.inputs.password = input }}
                        returnKeyType={"done"}
                        onSubmit={this.onPressLogin}
                        onChangeText={value => this.handleText(value, 'password')}
                        placeholder='Пароль' />

                    <Button.Primary
                        text='Войти'
                        onPress={this.onPressLogin} />

                    <Words.WithLines
                        text='или' />

                    <Button
                        text='Создать аккаунт'
                        onPress={this.onPressRegister} />
                </Container.Public>
            </Container.WithBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: {
            token: state.users.token,
        },
        screens: {
            current: state.screens.current,
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)