import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, Keyboard, Platform, ActivityIndicator } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import { Logo, Button } from "../../components"

import styles from './styles'

class Public extends Component {
    constructor(props) {
        super(props)

        this.state = {
            poweredBy: true,
        }
    }
    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardWillShow,
        )

        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyboardWillHide,
        )
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    keyboardWillShow = () => {
        this.setState({
            poweredBy: false,
        })
    }

    keyboardWillHide = () => {
        this.setState({
            poweredBy: true,
        })
    }

    render() {
        const { onBack = null } = this.props
        const { loader } = this.props.screens
        return (
            <KeyboardAvoidingView style={styles.body} behavior="padding">
                {
                    loader
                    ?
                        (<View style={styles.loader}>
                            <ActivityIndicator size="large" color={styles.$loaderColor} />
                        </View>)
                    :
                        onBack
                        ? 
                            (<View style={styles.back}>
                                <Button.Icon
                                    icon='arrow-back'
                                    onPress={onBack} />
                            </View>)
                        : null 
                }
                <View style={styles.logo}>
                    <Logo.Animate />
                </View>

                <View style={styles.form}>
                    {this.props.children}
                </View>
                
                {
                    this.state.poweredBy
                    ?
                        (<View style={styles.poweredBy}>
                            <Text style={styles.poweredByText}>v 0.1.0</Text>
                            <Text style={styles.poweredByText}>Powered by Div-Art</Text>
                        </View>)
                    : null
                }
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.screens.home,
        screens: {
            loader: state.screens.loader,
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Public)