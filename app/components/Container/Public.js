import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Logo } from "../../components";

import styles from './styles'

export default class Public extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.body} behavior="padding">
                <View style={styles.logo}>
                    <Logo.Animate />
                </View>

                <View style={styles.form}>
                    {this.props.children}
                </View>

                <View style={styles.poweredBy}>
                    <Text style={styles.poweredByText}>Powered by Div-Art</Text>
                </View>
            </KeyboardAvoidingView>
        )
    }
}