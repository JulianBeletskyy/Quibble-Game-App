import React, { Component } from 'react'
import Container from './Container'

export default class WithBackground extends Component {
    render() {
        return (
            <Container
                withBackground={true}>
                {this.props.children}
            </Container>
        )
    }
}