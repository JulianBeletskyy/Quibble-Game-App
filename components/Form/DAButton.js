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
        const { text = '', btnStyle = {}, textStyle = {}, type = 'primary' } = this.props
        const style = type == 'primary' ? styles.btnPrimary : styles.btnDefault
        return (
            <TouchableHighlight
                style={[styles.btn, style, btnStyle]}
                onPress={this.onPress}
                onLongPress={this.onLongPress}
                underlayColor={type == 'primary' ? '#ce1223' : 'rgba(0, 0, 0, 0.5)'}>
                <Text
                    style={[styles.text, textStyle]}>
                    {text.toUpperCase()}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        borderStyle: 'solid',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        marginBottom: 10,
    },
    btnPrimary: {
        backgroundColor: '#f42f41',
        borderColor: '#f42f41',
    },
    btnDefault: {
        borderColor: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
