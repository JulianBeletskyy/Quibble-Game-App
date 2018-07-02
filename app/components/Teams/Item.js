import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../../components'

import styles from './styles'

class Item extends Component {
    render() {
        const { team } = this.props
        return (
            <View
                style={styles.item}>
                <View
                    style={[styles.color, {backgroundColor: team.color}]} />

                <Text
                    style={styles.text}>
                    {team.name}
                </Text>

                <Button.Icon
                    icon="trash"
                    style={styles.remove} />
            </View>
        )
    }
}

export default Item