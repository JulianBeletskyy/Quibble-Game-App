import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { Container, Button } from '../components'

class Home extends Component {
    componentDidMount = () => {
        this.props.isHome(true)
        AsyncStorage.getItem('token').then((token) => {
            if (token) {
                this.props.loggedIn(token)
            }
        })
    }

    onPressPlay = (e) => {
        this.props.navigation.navigate('Teams')
    }

    onPressAbout = (e) => {
        console.log('About')
    }

    onPressLogin = (e) => {
        this.props.isHome(false)
        this.props.navigation.navigate('Login')
    }

    onPressLogout = (e) => {
        AsyncStorage.removeItem('token')
        this.props.logout()
    }

    render() {
        const { token } = this.props.users
        return (
            <Container.WithBackground>
                <Container.Public>
                    <Button.Primary
                        text='Играть'
                        onPress={this.onPressPlay} />
                    <Button
                        text='О приложении'
                        onPress={this.onPressAbout}
                        type='default' />
                    {
                        ! token
                        ?
                            (<Button
                                text='Войти'
                                onPress={this.onPressLogin}
                                type='default' />)
                        :
                            (<Button
                                text='Выйти'
                                onPress={this.onPressLogout}
                                type='default' />)
                    }
                </Container.Public>
            </Container.WithBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.screens.home,
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
)(Home)