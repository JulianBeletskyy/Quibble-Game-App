import React, { Component } from 'react'
import { View, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { Container, Button, Input } from '../components'

class Register extends Component {
    constructor(props) {
        super(props)

        this.data = {
            name: '',
            email: '',
            password: '',
        }

        this.inputs = {
            name: null,
            email: null,
            password: null,
        }
    }

    componentWillReceiveProps (newProps) {
        if (newProps.users.token && newProps.users.token != this.props.users.token) {
            newProps.navigation.navigate('Home')
            Keyboard.dismiss()
        }
    }

    handleText = (value, key) => {
        this.data[key] = value
    }

    onPressRegister = (e) => {
        if (this.data.name == '') {
            this.props.message({
                'title': 'Name is required!',
                'body': 'Please enter your name',
                'type': 'error',
            })
        } else if (this.data.email == '') {
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
            this.props.register(this.data)
        }
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
                    onBack={() => this.props.navigation.goBack()}>
                    <Input
                        icon='contact'
                        placeholder='Имя'
                        inputRef={input => { this.inputs.name = input }}
                        onSubmit={() => this.focusNext('email')}
                        returnKeyType={"next"}
                        onChangeText={value => this.handleText(value, 'name')} />

                    <Input
                        icon='mail'
                        placeholder='Email'
                        inputRef={input => { this.inputs.email = input }}
                        onSubmit={() => this.focusNext('password')}
                        returnKeyType={"next"}
                        onChangeText={value => this.handleText(value, 'email')} />

                    <Input.Password
                        icon='lock'
                        placeholder='Пароль'
                        inputRef={input => { this.inputs.password = input }}
                        onSubmit={this.onPressRegister}
                        returnKeyType={"done"}
                        onChangeText={value => this.handleText(value, 'password')} />

                    <Button.Primary
                        text='Регистрация'
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
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)