import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Logo, Words } from "../../components"

import styles from './styles'

class Game extends Component {
    render() {
        const { title = null, left = null } = this.props
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={false}
                    barStyle="light-content" />

                <View style={styles.logoSmall}>
                    { left }
                    <Logo.Small />
                </View>

                <View style={styles.title}>
                    <Words.Title
                        text={title} />
                </View>

                <View style={styles.game}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default Game