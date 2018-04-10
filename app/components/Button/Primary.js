import React, { Component } from "react"
import Button from "./Button"

export default class Primary extends Component {
    render() {
        return (
            <Button
                type="primary"
                {...this.props} />
        )
    }
}