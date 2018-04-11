import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Keyboard, StatusBar, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Bars } from 'react-native-loader'
import actions from '../../actions'
import { Background } from '../index'
import { AlertConnect } from '../Alert'

import styles from './styles'

class Container extends Component {
    componentWillReceiveProps (newProps) {
        const validate = newProps.alerts.validate
        if (Object.keys(validate).length) {
            const field = Object.keys(validate)[0]
            const message = validate[field][0]
            newProps.alertWithType('error', 'Validate error', message)
            newProps.validateClear()
        }

        const errors = newProps.alerts.errors
        if (Object.keys(errors).length) {
            const message = Object.keys(errors)[0]
            const type = errors[message]
            newProps.alertWithType(type, 'Server message', message)
            newProps.errorsClear()
        }

        const message = newProps.alerts.message
        if (Object.keys(message).length) {
            newProps.alertWithType(message.type, message.title, message.body)
            newProps.messageClear()
        }
    }

    render () {
        const { withBackground = false } = this.props
        const { loader = false } = this.props.screens
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <StatusBar
                        translucent={true}
                        barStyle="light-content" />
                    {
                        withBackground
                        ? <Background />
                        : null
                    }

                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alerts,
        screens: {
            loader: state.screens.loader,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlertConnect(Container))