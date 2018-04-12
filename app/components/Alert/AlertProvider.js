import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import DropdownAlert from 'react-native-dropdownalert'

export default class AlertProvider extends Component {
    static get childContextTypes() {
        return {
            alertWithType: PropTypes.func,
            alert: PropTypes.func,
        }
    }

    static get propTypes() {
        return {
            children: PropTypes.any,
        }
    }

    getChildContext() {
        return {
            alert: (...args) => this.dropdown.alert(...args),
            alertWithType: (...args) => this.dropdown.alertWithType(...args),
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {React.Children.only(this.props.children)}
                <DropdownAlert
                    endDelta={StatusBar.currentHeight}
                    inactiveStatusBarStyle="light-content"
                    ref={(ref) => { this.dropdown = ref }} />
            </View>
        )
    }
}