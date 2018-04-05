import React from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'

export default class DAButton extends React.Component {
    onPress = (e) => {
        if (this.props.onPress) {
            this.props.onPress(e)
        }
    }

    onLongPress = (e) => {
        if (this.props.onLongPress) {
            this.props.onLongPress(e)
        }
    }

    render() {
        const { text = '', btnStyle = {}, textStyle = {} } = this.props
        return (
            <TouchableHighlight
                style={[styles.btn, btnStyle]}
                onPress={this.onPress}
                onLongPress={this.onLongPress}>
                <Text>{text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#f42f41',
    },
});
