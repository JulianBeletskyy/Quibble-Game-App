import React, { Component } from "react"
import Button from "./Button"

import styles from './styles'

export default class Small extends Component {
    render() {
        return (
            <Button
                btnStyle={styles.smallBtn}
                textStyle={styles.smallText}
                {...this.props} />
        )
    }
}