import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../../components'

import styles from './styles'

class Player extends Component {
    render() {
        const { player } = this.props
        return (
            <View
                style={styles.item}>
                <Button.Icon
                    icon="contact"
                    style={styles.avatar}
                    size={48}
                    color={styles.$emptyAvatar} />

                <Text
                    style={styles.text}>
                    {player.name}
                </Text>

                <Button.Icon
                    icon="trash"
                    style={styles.remove} />
            </View>
        )
    }
}

export default Player