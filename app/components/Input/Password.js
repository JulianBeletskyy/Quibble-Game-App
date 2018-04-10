import React, { Component } from 'react'
import Input from './Input'

export default class Password extends Component {
    render() {
        return (
            <Input
                {...this.props}
                type="password" />
        )
    }
}