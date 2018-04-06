import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default class Background extends React.Component {
    render() {
        const { bgImage = require('app/assets/background.jpg') } = this.props
        return (
            <Image
                style={styles.background}
                source={bgImage} />
        )
    }
}

const styles = StyleSheet.create({
    background: {
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
})