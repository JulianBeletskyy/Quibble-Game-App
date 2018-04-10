import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container } from '../components'

export default class Teams extends Component {
    render() {
        return (
            <Container.WithBackground>
                <Text>Teams</Text>
            </Container.WithBackground>
        );
    }
}